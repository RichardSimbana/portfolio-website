import React from 'react';
import './App.css';
import Header from './components/Header.js';
import About from './containers/About/About.js';
import Home from './containers/Home/Home.js';
import Work from './containers/Work/Work.js';
import Contact from './containers/Contact/Contact.js';
import * as emailjs from 'emailjs-com';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    emailjs.init(process.env.REACT_APP_EMAILJS_USER);

    this.state = {
      isEmailConfirming: false,
      contactForm: {
        name: "",
        email: "",
        message: ""
      },
      selectedCard: {
        title: '',
        date: '',
        link: '',
        description: ''
      },
      cardInfos: [
        {
          title: 'Portfolio Website',
          image: require('./images/portfolio-website.jpg'),
          date: '2020',
          link: 'www.richardsimbana.com',
          description: `Portfolio website used to market myself as a developer.`,
          role: `This portfolio website was built using ReactJS and styled with Bootstrap. Currently hosting the website using Amazon EC2 and the deployment process has been streamlined using Docker. I will be using this project to evolve my skills as a developer and will continue to add more features along the way. Future plans involve creating a backend API using .Net Core which will pull information from a database. This will eliminate storing information on the front-end and give me the ability to add content by inserting into the database and not having to redeploy my front-end. You can view the source code on my Github, linked below.`
        },
        {
          title: 'Catch The Booty',
          image: require('./images/catch-the-booty.jpg'),
          date: '2018',
          link: 'https://play.google.com/store/apps/details?id=com.PocketNovellas.CatchTheBooty&hl=en&gl=US',
          description: `Catch bags of color-coded booty in pirate chests. But miss a bag and it's all over. Try your best to get the highest score! Featuring simple pick-up and play gameplay and colorful, clean graphics. Enjoy the jaunty, seafaring melody`,
          role: `Lead the development for a pirate themed arcade style mobile game using Unity3D. You can download the game on the Google Play Store, linked below.`
        },
        {
          title: 'Pixel Prison Blues',
          image: require('./images/pixel-prison-blues.jpg'),
          date: '2015',
          link: 'https://www.bumblebeargames.com/portfolio/pixel-prison-blues/',
          description: `Pixel Prison Blues is a fun party game for you and 29 of your best friends. Play either as an inmate trying to find enough gold to bribe the corrupt warden or play as a corrections officer hellbent on keeping those inmates in their cells. The gameplay is quick and very social; you must work together to win!`,
          role: `Freelanced as a Artificial Intelligence Programmer for a NYC-based independent game studio. Created autonomous agents to simulate players for testing and presentation purposes. Focused on agent movements and situational behaviours. You can visit the studios website, linked below.`
        }
      ]
    }
  }

  onEmailSuccess = response => {
    this.setState({ isEmailConfirming: false });
    alert('Email Successfully Sent');
  }

  onEmailFailure = error => {
    this.setState({ isEmailConfirming: false });
    alert('Error Occurred');
  }

  handleChange = event => {
    const contactForm = { ...this.state.contactForm };
    contactForm[event.target.id] = event.target.value;
    this.setState({ contactForm });
  }

  handleSubmit = event => {
    event.preventDefault();

    const contactForm = { ...this.state.contactForm };
    const { name, email, message } = contactForm;

    let templateParams = {
      from_name: name,
      from_email: email,
      message: message
    };

    this.setState({ isEmailConfirming: true });

    emailjs.send(process.env.REACT_APP_EMAILJS_SERVICE, process.env.REACT_APP_EMAILJS_TEMPLATE, templateParams)
      .then((response) => this.onEmailSuccess(response), (error) => this.onEmailFailure(error));

    contactForm.name = "";
    contactForm.email = "";
    contactForm.message = "";

    this.setState({ contactForm });
  }

  handleSelectClick = x => {
    const selectedCard = { ...this.state.selectedCard };
    selectedCard.title = x.title;
    selectedCard.date = x.date;
    selectedCard.link = x.link;
    selectedCard.description = x.description;
    selectedCard.role = x.role;
    this.setState({ selectedCard });
  }

  render() {
    return (
      <React.Fragment>
        <Header />
        <Home />
        <About />
        <Work
          selectedCard={this.state.selectedCard}
          cardInfos={this.state.cardInfos}
          onSelectClick={this.handleSelectClick} 
        />
        <Contact
          contactForm={this.state.contactForm}
          isEmailConfirming={this.state.isEmailConfirming}
          onChange={this.handleChange}
          onSubmit={this.handleSubmit}
        />
      </React.Fragment>
    )
  }
}
export default App;
