import React, { Component } from 'react';
import Header from '../Header';
import Footer from '../Footer';
import ScrollHint from '../ScrollHint';
import YouTubePlayer from '../YouTubePlayer';
import Texts from '../../texts';
import { isInOrPassedViewport } from '../../util';
import './ITS.scss';

class ITS extends Component {
	constructor(props) {
		super(props);
		this.state = {
			scrollLevel: 0,
			mobile: window.matchMedia('(max-width: 959px)').matches
		}
		this.sec2Title = React.createRef();
		this.player = React.createRef();
		this.endOfSec2 = React.createRef();
	}

	scrollEvent = () => {
		if (isInOrPassedViewport(this.endOfSec2.current)) {
			this.setState({ scrollLevel: 3 })
		} else if (isInOrPassedViewport(this.player.current)) {
			this.setState({ scrollLevel: 2 })
		} else if (isInOrPassedViewport(this.sec2Title.current)) {
			this.setState({ scrollLevel: 1 })
		} else {
			this.setState({ scrollLevel: 0 })
		}
	}

	windowResizeHandler = () => {
        this.setState({
            mobile: window.matchMedia('(max-width: 959px)').matches
        });
    }

	componentWillMount() {
		window.scrollTo(0,0);
	}

	componentDidMount() {
		window.addEventListener("scroll", this.scrollEvent);
		window.addEventListener('resize', this.windowResizeHandler);
	}

	componentWillUnmount() {
		window.removeEventListener("scroll", this.scrollEvent);
		window.removeEventListener('resize', this.windowResizeHandler);
	}

	render() {
		const { scrollLevel, mobile } = this.state

		return (
			<React.Fragment>
				<Header pageId="its"/>
				<section id="its-sec1" className={ scrollLevel===3 ? 'fade3' : (scrollLevel===2 ? 'fade2' : '')}>
					<div className={`container ${scrollLevel>=1 ? 'fade1' : '' }`}>
						<h2>{Texts.ITSHero.title}</h2>
						<p className="contentText">{Texts.ITSHero.content}</p>
					</div>
					<ScrollHint />
				</section>
				<div id="its-sec1-placeholder"></div>
				<section id="its-sec2">
					<div className="container">
						<h3 ref={this.sec2Title}>To improve the<br/><span className="text-blue">effectiveness</span> of teaching<br/>meets teachers' urgent need.</h3>
						<p className="subheader">Students get lost fast in class. Teachers want to track students' response as much as their own teaching pace. Doing so will significantly improve the efficiency of teaching and learning. But they need help when facing large number of students.</p>
						<div className="playerStart" ref={this.player}></div>
						<YouTubePlayer />
						<div className="endOfSec2" ref={this.endOfSec2}></div>
					</div>
				</section>
				<section id="its-sec3">
					<div className="section-header">
						<h2>User Study</h2>
					</div>
					<div className="container">
						<p className="lead">Teacher: I want <span className="text-orange">super power</span>!</p>
						<p>The table below shows pairwise comparison matrix summarizing teachers’ preferences between "superpowers". Each row shows a superpower that appeared in at least two teachers’ hierarchies, and each column shows a different superpower against which it is being compared (cells on the diagonal represent self-comparisons, and are blacked-out). Cell shade indicates the number of teachers who ranked the row superpower higher than the column superpower, with darker shades indicating greater agreement (minimum observed value is 0, and maximum is 4). Grey indicates that this superpower was not present in all five teachers’ card stacks (by the time a teacher first generated this card, no synonyms were available among the cards generated by previous teachers).</p>
						<img className="img-its img-its1" src="/imgs/its-1.jpg" alt="Superpower chart"/>
					</div>
				</section>
				<section id="its-sec4">
					<div className="section-header">
						<h2>Our proposal</h2>
					</div>
					<div className="container">
						<p className="lead">Use <span className="text-orange">Augmented Reality</span> to enrich visible info</p>
						<p>Based on carefully conducted user case study and detailed research about competitive teaching-aid tools on the market, we believe augmented reality will give teachers maximum access to additional data they need to perform most efficient and effective teaching. Such data refers to issues in-place in reality, is also interactive in projection. Teachers can observe and decide what to do with the data throughout the class while keeping environmental awareness. The benefits of head-mounted wearable device also includes keeping teachers' hands free to minimize the impact on their regular teaching behavior.</p>
					</div>
				</section>
				<section id="its-sec5">
					<div className="section-header">
						<h2>Design</h2>
					</div>
					<div className="container">
						<img className="img-its img-its2" src="/imgs/its-2.jpg" alt="Illustation Overall"/>
						<img className="img-its img-its3" src="/imgs/its-3.jpg" alt="Illustation Stats"/>
						<p>As shown above, the HoloLens software should function as a monitor to all students and report their learning behavior with explicit visual feedback to the teacher. For example, the "hand-up" figure shows that student stuck at someplace. Colored "hand" shows multi-level urgency for student's need for help. And "Zzz" figure shows up after certain student's PC does not record any input behavior for a certain time. These sample figures help the teacher quickly identifies those who need help but may be too shy to raise their hands, or reminds the student who is idling behind the screen to guide them back to proper active learning status.</p>
					</div>
				</section>
				<section id="its-sec6">
					<div className="section-header">
						<h2>Technology</h2>
					</div>
					<div className="container">
						<p>The core technology we use is <b className="text-orange">Microsoft HoloLens</b>. We use <b className="text-blue">Node</b> and <b className="text-blue">MongoDB</b> to handle data I/O, storage and calculations as a support.</p>
						<div className="tech-imgs-wrapper">
							{Texts.ITSTech.map((item, index) => {
								return <img className="tech-imgs" src={ mobile ? item.msrc : item.src} alt={item.alt} key={index}/>
							})}
						</div>
					</div>
				</section>
				<section id="its-sec7">
					<div className="section-header">
						<h2>Implementation</h2>
					</div>
					<div className="container">
						<p>My job is to <b className="text-orange">prototype a web application</b> for displaying and testing data flows, to <b className="text-blue">initiate the construction of virtual world in Unity</b> and to integrate Unity build with HoloLen emulator in Visual Studio. The following diagrams present basic data structures for both front end interface and Holographic display implementation.</p>
						<p className="lead">Web application Structure</p>
						<img className="imp-imgs" src="/imgs/its-6.png" alt="Web application Structure"/>
						<p className="lead">AR Implementation Structure</p>
						<img className="imp-imgs" src="/imgs/its-7.png" alt="AR Implementation Structure"/>
						<p>During my short stay, I mostly focused on Unity coding, aiming to create an AR environment that deliver visual information. We setup the database as a streaming source and use the headset as the front-end interface that receives and displays data. The data collection and database population coding is most accomplished by the time I joined the team. For the first phase of my work, I spent a short period of time learning the codebase built with Node.js and Ember.js. This step is important for me to understand how the database is connected to front end and how the web interface functions in order to migrant web data to hologram and visualize information. After that, I started to “translate” web language to hologram language to be displayed in HoloLens headset. I spent time reading papers about AR visual design guidelines and testing automated and gesture-triggerd 3D model behaviors. On the other hand, we tested data streaming in various approaches aiming to seamlessly integrate code and data. We also harmonized the coding style for code reuse.</p>
					</div>
				</section>
				<section id="its-sec8">
					<div className="section-header">
						<h2>Outcome</h2>
					</div>
					<div className="container">
						<p>By the end of my stay, our team has finished designing and constructing the database and pre-scan the designated classroom for testing purpose. We also <b className="text-orange">finished visualizing data with web interface</b>, making Unity interact with database, <b className="text-blue">dynamically generating and placing objects in vitual world</b> based on retrived data, and rendering simple visual effects and animations. The image below is a demo web interface.</p>
						<div className="outcome-imgs-wrapper"><img className="outcome-imgs" src="/imgs/its-4.jpg" alt="Outcome web app"/></div>
						<p>In the visual world, I built <b className="text-orange">figures which simulate visual feedback</b> to remind teacher the learning status for specific student, made them dynamically generated and rendered based on local database input. The object behavior is also optimized to interact with camera movement and gesture.</p>
						<div className="outcome-imgs-wrapper"><img className="outcome-imgs" src="/imgs/its-5.png" alt="Outcome AR"/></div>
						<p>Meanwhile, the steaming is tested seperately. With intention to bring our product online, more issues like network accessibility and security need to be taken into consideration. In the near future, field testing will be conducted and more information can be collected to aid the decision-making progress.</p>
					</div>
				</section>
				<section id="its-sec9">
					<div className="section-header">
						<h2>Acknowledgment</h2>
					</div>
					<div className="container">
						<p className="lead">To Carnegie Mellon University <b className="text-cmu">HCI Institute</b></p>
						<p>I remember the first day when I met Kenneth Holstein, PhD student at HCII back in 2017, he described to me about what people do at HCII as “researching about cutting edge and ahead of time technologies that will have huge market impact in the future” and he gave me an example of mobile touchscreen research sponsored by Apple at early 21st century, which was more than five years before the first generation of iPhone hit the market. Looking back at the project I worked on during this short three months, I could not agree more. I appreciate all the guidance and help from Dr. Bruce McLaren, Dr. Vincent Aleven as well as admission and support staffs from HCI Institute. I enjoyed working closely with Kenneth Holstein, Zac Yu and all other team members. Finally, I sincerely wish them the best in the future development of Intelligent Tutoring Systems project.</p>
					</div>
				</section>
				<Footer />
			</React.Fragment>
		);
	}
}

export default ITS;
