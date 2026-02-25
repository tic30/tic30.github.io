import { useEffect, useState, useCallback, useRef } from 'react';
import {
    Box,
    Card,
    CardContent,
    TextField,
    Button,
    Typography,
    Alert,
    IconButton,
    Stack,
    Chip,
    Divider,
    Grid,
    Switch,
    FormControlLabel,
} from '@mui/material';
import {
    Edit as EditIcon,
    Save as SaveIcon,
    NotificationsActive as NotificationsActiveIcon,
    NotificationsOff as NotificationsOffIcon,
    TrendingUp as TrendingUpIcon,
    TrendingDown as TrendingDownIcon,
    RestartAlt as RestartAltIcon,
} from '@mui/icons-material';

// Extend Window interface for webkit AudioContext
declare global {
    interface Window {
        webkitAudioContext: typeof AudioContext;
    }
}

interface StockData {
    symbol: string;
    price: number;
    change: number;
    changePercent: number;
    timestamp: Date;
}

// Alpha Vantage API configuration
// const ALPHA_VANTAGE_API_KEY = 'Z3UEVB72GV4K7XYQ'; // From https://www.alphavantage.co/support/#api-key
// const ALPHA_VANTAGE_BASE_URL = 'https://www.alphavantage.co/query';

const FINNHUB_API_KEY = 'd6fb101r01qvn4o2fpdgd6fb101r01qvn4o2fpe0'; // From https://finnhub.io/dashboard
const FINNHUB_BASE_URL = 'https://finnhub.io/api/v1/quote';

// Market hours configuration (US Eastern Time)
const MARKET_HOURS = {
    OPEN_HOUR: 9,
    OPEN_MINUTE: 30,
    CLOSE_HOUR: 16,
    CLOSE_MINUTE: 0,
    TIMEZONE: 'America/New_York',
} as const;

// Helper function to check if market is open
const isMarketOpen = (): { isOpen: boolean; message: string } => {
    try {
        const now = new Date();
        const etTime = new Date(now.toLocaleString('en-US', { timeZone: MARKET_HOURS.TIMEZONE }));
        const dayOfWeek = etTime.getDay(); // 0 = Sunday, 6 = Saturday

        // Check if it's a weekday (Monday-Friday)
        if (dayOfWeek === 0 || dayOfWeek === 6) {
            return {
                isOpen: false,
                message: 'Markets are closed on weekends',
            };
        }

        const hour = etTime.getHours();
        const minute = etTime.getMinutes();
        const currentMinutes = hour * 60 + minute;
        const openMinutes = MARKET_HOURS.OPEN_HOUR * 60 + MARKET_HOURS.OPEN_MINUTE;
        const closeMinutes = MARKET_HOURS.CLOSE_HOUR * 60 + MARKET_HOURS.CLOSE_MINUTE;

        if (currentMinutes < openMinutes) {
            const opensIn = openMinutes - currentMinutes;
            const hours = Math.floor(opensIn / 60);
            const mins = opensIn % 60;
            return {
                isOpen: false,
                message: `Markets open in ${hours}h ${mins}m (9:30 AM ET)`,
            };
        }

        if (currentMinutes >= closeMinutes) {
            return {
                isOpen: false,
                message: 'Markets closed for the day (4:00 PM ET)',
            };
        }

        return {
            isOpen: true,
            message: 'Markets are open',
        };
    } catch (error) {
        console.error('Error checking market hours:', error);
        return {
            isOpen: true,
            message: 'Unable to verify market hours',
        };
    }
};

// Default values
const DEFAULT_VALUES = {
    STOCK_SYMBOL: 'NVDA',
    HIGH_THRESHOLD: 190,
    LOW_THRESHOLD: 170,
    PURCHASE_PRICE: 171,
    ENABLE_HIGH_ALERT: true,
    ENABLE_LOW_ALERT: true,
    UPDATE_INTERVAL_MINUTES: 1,
} as const;

// LocalStorage keys
const STORAGE_KEYS = {
    STOCK_SYMBOL: 'stocktrack_symbol',
    HIGH_THRESHOLD: 'stocktrack_high_threshold',
    LOW_THRESHOLD: 'stocktrack_low_threshold',
    ENABLE_HIGH_ALERT: 'stocktrack_enable_high_alert',
    ENABLE_LOW_ALERT: 'stocktrack_enable_low_alert',
    PURCHASE_PRICE: 'stocktrack_purchase_price',
    UPDATE_INTERVAL_MINUTES: 'stocktrack_update_interval_minutes',
} as const;

// Helper functions for localStorage
const loadFromStorage = <T,>(key: string, defaultValue: T): T => {
    try {
        const item = localStorage.getItem(key);
        return item ? JSON.parse(item) : defaultValue;
    } catch (error) {
        console.error(`Error loading ${key} from localStorage:`, error);
        return defaultValue;
    }
};

const saveToStorage = (key: string, value: string | number | boolean): void => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
        console.error(`Error saving ${key} to localStorage:`, error);
    }
};

export const StockTrack = () => {
    // Load initial values from localStorage
    const [stockSymbol, setStockSymbol] = useState<string>(() =>
        loadFromStorage(STORAGE_KEYS.STOCK_SYMBOL, DEFAULT_VALUES.STOCK_SYMBOL),
    );
    const [editedSymbol, setEditedSymbol] = useState<string>(() =>
        loadFromStorage(STORAGE_KEYS.STOCK_SYMBOL, DEFAULT_VALUES.STOCK_SYMBOL),
    );
    const [isEditing, setIsEditing] = useState<boolean>(false);
    const [stockData, setStockData] = useState<StockData | null>(null);
    const [notificationPermission, setNotificationPermission] =
        useState<NotificationPermission>('default');
    const [error, setError] = useState<string>('');
    const [marketStatus, setMarketStatus] = useState<string>('');

    // Threshold alerts - load from localStorage
    const [highThreshold, setHighThreshold] = useState<number>(() =>
        loadFromStorage(STORAGE_KEYS.HIGH_THRESHOLD, DEFAULT_VALUES.HIGH_THRESHOLD),
    );
    const [lowThreshold, setLowThreshold] = useState<number>(() =>
        loadFromStorage(STORAGE_KEYS.LOW_THRESHOLD, DEFAULT_VALUES.LOW_THRESHOLD),
    );
    const [enableHighAlert, setEnableHighAlert] = useState<boolean>(() =>
        loadFromStorage(STORAGE_KEYS.ENABLE_HIGH_ALERT, DEFAULT_VALUES.ENABLE_HIGH_ALERT),
    );
    const [enableLowAlert, setEnableLowAlert] = useState<boolean>(() =>
        loadFromStorage(STORAGE_KEYS.ENABLE_LOW_ALERT, DEFAULT_VALUES.ENABLE_LOW_ALERT),
    );
    const [isEditingThresholds, setIsEditingThresholds] = useState<boolean>(false);
    const [editedHighThreshold, setEditedHighThreshold] = useState<string>(() =>
        loadFromStorage(STORAGE_KEYS.HIGH_THRESHOLD, DEFAULT_VALUES.HIGH_THRESHOLD).toString(),
    );
    const [editedLowThreshold, setEditedLowThreshold] = useState<string>(() =>
        loadFromStorage(STORAGE_KEYS.LOW_THRESHOLD, DEFAULT_VALUES.LOW_THRESHOLD).toString(),
    );

    // Purchase price - load from localStorage
    const [purchasePrice, setPurchasePrice] = useState<number>(() =>
        loadFromStorage(STORAGE_KEYS.PURCHASE_PRICE, DEFAULT_VALUES.PURCHASE_PRICE),
    );
    const [isEditingPurchasePrice, setIsEditingPurchasePrice] = useState<boolean>(false);
    const [editedPurchasePrice, setEditedPurchasePrice] = useState<string>(() =>
        loadFromStorage(STORAGE_KEYS.PURCHASE_PRICE, DEFAULT_VALUES.PURCHASE_PRICE).toString(),
    );

    // Update interval - load from localStorage
    const [updateIntervalMinutes, setUpdateIntervalMinutes] = useState<number>(() =>
        loadFromStorage(
            STORAGE_KEYS.UPDATE_INTERVAL_MINUTES,
            DEFAULT_VALUES.UPDATE_INTERVAL_MINUTES,
        ),
    );
    const [isEditingInterval, setIsEditingInterval] = useState<boolean>(false);
    const [editedInterval, setEditedInterval] = useState<string>(() =>
        loadFromStorage(
            STORAGE_KEYS.UPDATE_INTERVAL_MINUTES,
            DEFAULT_VALUES.UPDATE_INTERVAL_MINUTES,
        ).toString(),
    );

    // Track whether we've already alerted for current threshold breach
    const hasAlertedHighRef = useRef<boolean>(false);
    const hasAlertedLowRef = useRef<boolean>(false);

    // Audio context for playing sounds
    const audioContextRef = useRef<AudioContext | null>(null);

    // Save to localStorage whenever values change
    useEffect(() => {
        saveToStorage(STORAGE_KEYS.STOCK_SYMBOL, stockSymbol);
    }, [stockSymbol]);

    useEffect(() => {
        saveToStorage(STORAGE_KEYS.HIGH_THRESHOLD, highThreshold);
    }, [highThreshold]);

    useEffect(() => {
        saveToStorage(STORAGE_KEYS.LOW_THRESHOLD, lowThreshold);
    }, [lowThreshold]);

    useEffect(() => {
        saveToStorage(STORAGE_KEYS.ENABLE_HIGH_ALERT, enableHighAlert);
    }, [enableHighAlert]);

    useEffect(() => {
        saveToStorage(STORAGE_KEYS.ENABLE_LOW_ALERT, enableLowAlert);
    }, [enableLowAlert]);

    useEffect(() => {
        saveToStorage(STORAGE_KEYS.UPDATE_INTERVAL_MINUTES, updateIntervalMinutes);
    }, [updateIntervalMinutes]);

    useEffect(() => {
        saveToStorage(STORAGE_KEYS.PURCHASE_PRICE, purchasePrice);
    }, [purchasePrice]);

    // Play alert sound using Web Audio API
    const playAlertSound = useCallback((frequency: number = 800, duration: number = 200) => {
        try {
            if (!audioContextRef.current) {
                audioContextRef.current = new (window.AudioContext || window.webkitAudioContext)();
            }

            const context = audioContextRef.current;
            const oscillator = context.createOscillator();
            const gainNode = context.createGain();

            oscillator.connect(gainNode);
            gainNode.connect(context.destination);

            oscillator.frequency.value = frequency;
            oscillator.type = 'sine';

            gainNode.gain.setValueAtTime(0.3, context.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, context.currentTime + duration / 1000);

            oscillator.start(context.currentTime);
            oscillator.stop(context.currentTime + duration / 1000);
        } catch (err) {
            console.error('Failed to play sound:', err);
        }
    }, []);

    // Fetch stock price from Alpha Vantage API
    const fetchStockPrice = useCallback(
        async (symbol: string): Promise<StockData> => {
            try {
                // const url = `${ALPHA_VANTAGE_BASE_URL}?function=GLOBAL_QUOTE&symbol=${symbol}&apikey=${ALPHA_VANTAGE_API_KEY}`;
                const url = `${FINNHUB_BASE_URL}?symbol=${symbol}&token=${FINNHUB_API_KEY}`;
                const response = await fetch(url);
                const data = await response.json();

                // Check for API errors
                if (data['Error Message']) {
                    throw new Error(data['Error Message']);
                }

                if (data['Note']) {
                    throw new Error('API rate limit reached. Please wait a moment.');
                }

                if (!data || !data['c']) {
                    throw new Error('Invalid symbol or no data available');
                }

                const price = parseFloat(data['c']);

                // Calculate change based on purchase price
                const change = price - purchasePrice;
                const changePercent = (change / purchasePrice) * 100;

                return {
                    symbol,
                    price: parseFloat(price.toFixed(2)),
                    change: parseFloat(change.toFixed(2)),
                    changePercent: parseFloat(changePercent.toFixed(2)),
                    timestamp: new Date(),
                };
            } catch (error) {
                console.error('Error fetching stock price:', error);
                throw error;
            }
        },
        [purchasePrice],
    );

    // Check and request notification permission
    const checkNotificationPermission = useCallback(async () => {
        if (!('Notification' in window)) {
            setError('This browser does not support notifications');
            return;
        }

        const currentPermission = Notification.permission;
        setNotificationPermission(currentPermission);

        if (currentPermission === 'default') {
            try {
                const permission = await Notification.requestPermission();
                setNotificationPermission(permission);

                if (permission === 'granted') {
                    new Notification('Stock Tracker Enabled', {
                        body: `Now tracking ${stockSymbol} stock price`,
                        icon: '/favicon.svg',
                    });
                }
            } catch (err) {
                setError('Failed to request notification permission');
                console.error(err);
            }
        }
    }, [stockSymbol]);

    // Check threshold alerts
    const checkThresholdAlerts = useCallback(
        (data: StockData) => {
            if (notificationPermission !== 'granted') return;

            // Check high threshold
            if (enableHighAlert && data.price >= highThreshold) {
                if (!hasAlertedHighRef.current) {
                    hasAlertedHighRef.current = true;
                    hasAlertedLowRef.current = false; // Reset low alert

                    // Play ascending tone sequence
                    playAlertSound(600, 150);
                    setTimeout(() => playAlertSound(800, 150), 200);
                    setTimeout(() => playAlertSound(1000, 200), 400);

                    new Notification(`🚨 ${data.symbol} HIGH ALERT`, {
                        body: `Price reached $${data.price} (High threshold: $${highThreshold})`,
                        icon: '/favicon.svg',
                        tag: 'threshold-alert',
                        requireInteraction: true,
                    });
                }
            } else if (data.price < highThreshold - 5) {
                // Reset alert when price drops below threshold with buffer
                hasAlertedHighRef.current = false;
            }

            // Check low threshold
            if (enableLowAlert && data.price <= lowThreshold) {
                if (!hasAlertedLowRef.current) {
                    hasAlertedLowRef.current = true;
                    hasAlertedHighRef.current = false; // Reset high alert

                    // Play descending tone sequence
                    playAlertSound(1000, 150);
                    setTimeout(() => playAlertSound(800, 150), 200);
                    setTimeout(() => playAlertSound(600, 200), 400);

                    new Notification(`🚨 ${data.symbol} LOW ALERT`, {
                        body: `Price dropped to $${data.price} (Low threshold: $${lowThreshold})`,
                        icon: '/favicon.svg',
                        tag: 'threshold-alert',
                        requireInteraction: true,
                    });
                }
            } else if (data.price > lowThreshold + 5) {
                // Reset alert when price rises above threshold with buffer
                hasAlertedLowRef.current = false;
            }
        },
        [
            notificationPermission,
            enableHighAlert,
            enableLowAlert,
            highThreshold,
            lowThreshold,
            playAlertSound,
        ],
    );

    // Fetch stock data (only during market hours)
    const updateStockData = useCallback(async () => {
        const marketCheck = isMarketOpen();
        setMarketStatus(marketCheck.message);

        // if (!marketCheck.isOpen) {
        //     console.log('Skipping update - market closed:', marketCheck.message);
        //     return;
        // }

        try {
            const data = await fetchStockPrice(stockSymbol);
            setStockData(data);
            checkThresholdAlerts(data);
            setError('');
        } catch (err) {
            setError('Failed to fetch stock data. This may go away next minute.');
            console.error(err);
        }
    }, [stockSymbol, fetchStockPrice, checkThresholdAlerts]);

    // Initialize: check permissions, market status, and fetch initial data
    useEffect(() => {
        checkNotificationPermission();
        updateStockData();
    }, [checkNotificationPermission, updateStockData]);

    // Set up interval to fetch data based on user-defined interval
    useEffect(() => {
        const intervalMs = updateIntervalMinutes * 60000; // Convert minutes to milliseconds
        const interval = setInterval(() => {
            updateStockData();
        }, intervalMs);

        return () => clearInterval(interval);
    }, [updateStockData, updateIntervalMinutes]);

    // Check market status every minute to update UI
    useEffect(() => {
        const statusInterval = setInterval(() => {
            const marketCheck = isMarketOpen();
            setMarketStatus(marketCheck.message);
        }, 60000); // Check every minute

        return () => clearInterval(statusInterval);
    }, []);

    // Handle symbol edit
    const handleSaveSymbol = () => {
        if (editedSymbol.trim()) {
            setStockSymbol(editedSymbol.trim().toUpperCase());
            setIsEditing(false);
            setStockData(null);
            // Reset threshold alerts when changing symbol
            hasAlertedHighRef.current = false;
            hasAlertedLowRef.current = false;
        }
    };

    const handleCancelEdit = () => {
        setEditedSymbol(stockSymbol);
        setIsEditing(false);
    };

    // Handle threshold edits
    const handleSaveThresholds = () => {
        const high = parseFloat(editedHighThreshold);
        const low = parseFloat(editedLowThreshold);

        if (!isNaN(high) && !isNaN(low) && high > low) {
            setHighThreshold(high);
            setLowThreshold(low);
            setIsEditingThresholds(false);
            // Reset alert flags when thresholds change
            hasAlertedHighRef.current = false;
            hasAlertedLowRef.current = false;
        } else {
            setError('Invalid thresholds. High must be greater than low.');
        }
    };

    const handleCancelThresholdEdit = () => {
        setEditedHighThreshold(highThreshold.toString());
        setEditedLowThreshold(lowThreshold.toString());
        setIsEditingThresholds(false);
    };

    // Handle purchase price edit
    const handleSavePurchasePrice = () => {
        const price = parseFloat(editedPurchasePrice);

        if (!isNaN(price) && price > 0) {
            setPurchasePrice(price);
            setIsEditingPurchasePrice(false);
        } else {
            setError('Invalid purchase price. Must be greater than 0.');
        }
    };

    const handleCancelPurchasePriceEdit = () => {
        setEditedPurchasePrice(purchasePrice.toString());
        setIsEditingPurchasePrice(false);
    };

    // Handle interval edit
    const handleSaveInterval = () => {
        const interval = parseFloat(editedInterval);

        if (!isNaN(interval) && interval >= 1 && interval <= 60) {
            setUpdateIntervalMinutes(interval);
            setIsEditingInterval(false);
        } else {
            setError('Invalid interval. Must be between 1 and 60 minutes.');
        }
    };

    const handleCancelIntervalEdit = () => {
        setEditedInterval(updateIntervalMinutes.toString());
        setIsEditingInterval(false);
    };

    // Handle reset - clear localStorage and refresh
    const handleReset = () => {
        if (
            window.confirm(
                'Are you sure you want to reset all settings to defaults? This will clear all saved data and refresh the page.',
            )
        ) {
            // Clear all stocktrack localStorage items
            Object.values(STORAGE_KEYS).forEach((key) => {
                localStorage.removeItem(key);
            });
            // Refresh the page
            window.location.reload();
        }
    };

    const getPriceColor = (change: number) => {
        if (change > 0) return 'success.main';
        if (change < 0) return 'error.main';
        return 'text.primary';
    };

    return (
        <Box sx={{ maxWidth: 600, mx: 'auto', p: 3 }}>
            <Card elevation={3}>
                <CardContent>
                    <Stack spacing={2}>
                        {/* Header */}
                        <Box
                            sx={{
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                            }}
                        >
                            <Typography variant="h5" component="h2">
                                Stock Tracker
                            </Typography>
                            <Box sx={{ display: 'flex', gap: 1, alignItems: 'center' }}>
                                <Chip
                                    icon={
                                        notificationPermission === 'granted' ? (
                                            <NotificationsActiveIcon />
                                        ) : (
                                            <NotificationsOffIcon />
                                        )
                                    }
                                    label={
                                        notificationPermission === 'granted'
                                            ? 'Notifications On'
                                            : 'Notifications Off'
                                    }
                                    color={
                                        notificationPermission === 'granted' ? 'success' : 'default'
                                    }
                                    size="small"
                                />
                                <IconButton
                                    size="small"
                                    onClick={handleReset}
                                    title="Reset all settings"
                                    color="error"
                                >
                                    <RestartAltIcon />
                                </IconButton>
                            </Box>
                        </Box>

                        {/* Error Alert */}
                        {error && <Alert severity="error">{error}</Alert>}

                        {/* Market Status Alert */}
                        {marketStatus && (
                            <Alert severity={isMarketOpen().isOpen ? 'success' : 'info'}>
                                {marketStatus}
                            </Alert>
                        )}

                        {/* Notification Permission Request */}
                        {notificationPermission === 'denied' && (
                            <Alert severity="warning">
                                Notifications are blocked. Please enable them in your browser
                                settings to receive price alerts.
                            </Alert>
                        )}

                        {notificationPermission === 'default' && (
                            <Alert
                                severity="info"
                                action={
                                    <Button
                                        color="inherit"
                                        size="small"
                                        onClick={checkNotificationPermission}
                                    >
                                        Enable
                                    </Button>
                                }
                            >
                                Enable notifications to receive price alerts
                            </Alert>
                        )}

                        {/* Stock Symbol Editor */}
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 1,
                                alignItems: 'center',
                            }}
                        >
                            {isEditing ? (
                                <>
                                    <TextField
                                        value={editedSymbol}
                                        onChange={(e) =>
                                            setEditedSymbol(e.target.value.toUpperCase())
                                        }
                                        label="Stock Symbol"
                                        size="small"
                                        fullWidth
                                        autoFocus
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') handleSaveSymbol();
                                            if (e.key === 'Escape') handleCancelEdit();
                                        }}
                                    />
                                    <IconButton color="primary" onClick={handleSaveSymbol}>
                                        <SaveIcon />
                                    </IconButton>
                                    <Button size="small" onClick={handleCancelEdit}>
                                        Cancel
                                    </Button>
                                </>
                            ) : (
                                <>
                                    <Typography variant="h6" sx={{ flex: 1 }}>
                                        Tracking: <strong>{stockSymbol}</strong>
                                    </Typography>
                                    <IconButton size="small" onClick={() => setIsEditing(true)}>
                                        <EditIcon />
                                    </IconButton>
                                </>
                            )}
                        </Box>

                        {/* Stock Data Display */}
                        {stockData ? (
                            <Box
                                sx={{
                                    p: 3,
                                    bgcolor: 'background.default',
                                    borderRadius: 2,
                                }}
                            >
                                <Typography variant="h3" sx={{ mb: 1 }}>
                                    ${stockData.price}
                                </Typography>
                                <Typography
                                    variant="h6"
                                    sx={{ color: getPriceColor(stockData.change) }}
                                >
                                    {stockData.change > 0 ? '+' : ''}
                                    {stockData.change} ({stockData.changePercent > 0 ? '+' : ''}
                                    {stockData.changePercent}%)
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    sx={{ mt: 1, display: 'block' }}
                                >
                                    Last updated: {stockData.timestamp.toLocaleTimeString()}
                                </Typography>
                            </Box>
                        ) : (
                            <Box
                                sx={{
                                    p: 3,
                                    bgcolor: 'background.default',
                                    borderRadius: 2,
                                    textAlign: 'center',
                                }}
                            >
                                <Typography color="text.secondary">
                                    Loading stock data...
                                </Typography>
                            </Box>
                        )}

                        {/* Purchase Price Section */}
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 1,
                                }}
                            >
                                <Typography variant="subtitle1" fontWeight="bold">
                                    Purchase Price
                                </Typography>
                                {!isEditingPurchasePrice && (
                                    <IconButton
                                        size="small"
                                        onClick={() => setIsEditingPurchasePrice(true)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                )}
                            </Box>

                            {isEditingPurchasePrice ? (
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <TextField
                                        label="Purchase Price"
                                        type="number"
                                        value={editedPurchasePrice}
                                        onChange={(e) => setEditedPurchasePrice(e.target.value)}
                                        size="small"
                                        fullWidth
                                        autoFocus
                                        InputProps={{
                                            startAdornment: (
                                                <Typography sx={{ mr: 1 }}>$</Typography>
                                            ),
                                        }}
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') handleSavePurchasePrice();
                                            if (e.key === 'Escape') handleCancelPurchasePriceEdit();
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleSavePurchasePrice}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={handleCancelPurchasePriceEdit}
                                    >
                                        Cancel
                                    </Button>
                                </Stack>
                            ) : (
                                <Box
                                    sx={{
                                        p: 2,
                                        bgcolor: 'action.hover',
                                        borderRadius: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant="h5">${purchasePrice}</Typography>
                                    {stockData && (
                                        <Typography
                                            variant="body2"
                                            sx={{ color: getPriceColor(stockData.change) }}
                                        >
                                            {stockData.change > 0
                                                ? '↑'
                                                : stockData.change < 0
                                                  ? '↓'
                                                  : '='}{' '}
                                            ${Math.abs(stockData.change).toFixed(2)}
                                        </Typography>
                                    )}
                                </Box>
                            )}
                        </Box>

                        {/* Update Interval Section */}
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 1,
                                }}
                            >
                                <Typography variant="subtitle1" fontWeight="bold">
                                    Update Interval
                                </Typography>
                                {!isEditingInterval && (
                                    <IconButton
                                        size="small"
                                        onClick={() => setIsEditingInterval(true)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                )}
                            </Box>

                            {isEditingInterval ? (
                                <Stack direction="row" spacing={1} alignItems="center">
                                    <TextField
                                        label="Minutes"
                                        type="number"
                                        value={editedInterval}
                                        onChange={(e) => setEditedInterval(e.target.value)}
                                        size="small"
                                        fullWidth
                                        autoFocus
                                        inputProps={{ min: 1, max: 60, step: 1 }}
                                        helperText="Between 1-60 minutes"
                                        onKeyPress={(e) => {
                                            if (e.key === 'Enter') handleSaveInterval();
                                            if (e.key === 'Escape') handleCancelIntervalEdit();
                                        }}
                                    />
                                    <Button
                                        variant="contained"
                                        size="small"
                                        onClick={handleSaveInterval}
                                    >
                                        Save
                                    </Button>
                                    <Button
                                        variant="outlined"
                                        size="small"
                                        onClick={handleCancelIntervalEdit}
                                    >
                                        Cancel
                                    </Button>
                                </Stack>
                            ) : (
                                <Box
                                    sx={{
                                        p: 2,
                                        bgcolor: 'action.hover',
                                        borderRadius: 1,
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Typography variant="h6">
                                        Every {updateIntervalMinutes}{' '}
                                        {updateIntervalMinutes === 1 ? 'minute' : 'minutes'}
                                    </Typography>
                                </Box>
                            )}
                        </Box>

                        <Divider />

                        {/* Threshold Alerts Section */}
                        <Box>
                            <Box
                                sx={{
                                    display: 'flex',
                                    justifyContent: 'space-between',
                                    alignItems: 'center',
                                    mb: 2,
                                }}
                            >
                                <Typography variant="h6">Price Alerts</Typography>
                                {!isEditingThresholds && (
                                    <IconButton
                                        size="small"
                                        onClick={() => setIsEditingThresholds(true)}
                                    >
                                        <EditIcon />
                                    </IconButton>
                                )}
                            </Box>

                            {isEditingThresholds ? (
                                <Stack spacing={2}>
                                    <Grid container spacing={2}>
                                        <Grid size={6}>
                                            <TextField
                                                label="High Threshold"
                                                type="number"
                                                value={editedHighThreshold}
                                                onChange={(e) =>
                                                    setEditedHighThreshold(e.target.value)
                                                }
                                                size="small"
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <Typography sx={{ mr: 1 }}>$</Typography>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                        <Grid size={6}>
                                            <TextField
                                                label="Low Threshold"
                                                type="number"
                                                value={editedLowThreshold}
                                                onChange={(e) =>
                                                    setEditedLowThreshold(e.target.value)
                                                }
                                                size="small"
                                                fullWidth
                                                InputProps={{
                                                    startAdornment: (
                                                        <Typography sx={{ mr: 1 }}>$</Typography>
                                                    ),
                                                }}
                                            />
                                        </Grid>
                                    </Grid>
                                    <Box sx={{ display: 'flex', gap: 1 }}>
                                        <Button
                                            variant="contained"
                                            size="small"
                                            onClick={handleSaveThresholds}
                                        >
                                            Save
                                        </Button>
                                        <Button
                                            variant="outlined"
                                            size="small"
                                            onClick={handleCancelThresholdEdit}
                                        >
                                            Cancel
                                        </Button>
                                    </Box>
                                </Stack>
                            ) : (
                                <Stack spacing={2}>
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            p: 2,
                                            bgcolor: 'error.light',
                                            borderRadius: 1,
                                            opacity: enableHighAlert ? 1 : 0.5,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <TrendingUpIcon />
                                            <Box>
                                                <Typography variant="body2" fontWeight="bold">
                                                    High Alert
                                                </Typography>
                                                <Typography variant="h6">
                                                    ${highThreshold}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={enableHighAlert}
                                                    onChange={(e) => {
                                                        setEnableHighAlert(e.target.checked);
                                                        if (!e.target.checked) {
                                                            hasAlertedHighRef.current = false;
                                                        }
                                                    }}
                                                />
                                            }
                                            label=""
                                        />
                                    </Box>

                                    <Box
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'center',
                                            justifyContent: 'space-between',
                                            p: 2,
                                            bgcolor: 'info.light',
                                            borderRadius: 1,
                                            opacity: enableLowAlert ? 1 : 0.5,
                                        }}
                                    >
                                        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                                            <TrendingDownIcon />
                                            <Box>
                                                <Typography variant="body2" fontWeight="bold">
                                                    Low Alert
                                                </Typography>
                                                <Typography variant="h6">
                                                    ${lowThreshold}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <FormControlLabel
                                            control={
                                                <Switch
                                                    checked={enableLowAlert}
                                                    onChange={(e) => {
                                                        setEnableLowAlert(e.target.checked);
                                                        if (!e.target.checked) {
                                                            hasAlertedLowRef.current = false;
                                                        }
                                                    }}
                                                />
                                            }
                                            label=""
                                        />
                                    </Box>
                                </Stack>
                            )}
                        </Box>
                    </Stack>
                </CardContent>
            </Card>
        </Box>
    );
};
