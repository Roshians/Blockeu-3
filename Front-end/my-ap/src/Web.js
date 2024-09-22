import React from 'react';
import './Web.css'; // Link to the external CSS file
import VideoSlideshow from './video';

const Web = () => {
  const cardStyle = {
    flex: 1,
    backgroundColor: '#f8f9fa',
    borderRadius: '8px',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  };

  const imgStyle = {
    maxWidth: '80px',
    margin: '50 auto 15px',
  };

  return (
    <div>
      {/* Main Section */}
      <div className="container container-main">
        <h1>
          Blockchain Demystified: Your Gateway to Tomorrow's Technology,<br /> Where Curiosity Meets Blockchain Mastery
        </h1>
        <p>Discover, Understand, Innovate: The World of Blockchain Awaits!</p>
      </div>

      <div className="flex-container">
        <div className="left-container">
          {/* Chat Box */}
          <div className="chat-box">
            <h5>Curious About Blockchain? Ask Us at Blockedu!</h5>
            <div className="chat-messages">
              <button>What is immutability in blockchain?</button>
              <button>Explain smart contract in simple words.</button>
              <button>What are NFTs and why are they used?</button>
            </div>
            <div className="input-group">
              <input
                type="text"
                className="form-control chat-input"
                placeholder="Ask anything about block technology"
              />
              <button className="btn search-button">
                <i className="bi bi-arrow-up"></i>
              </button>
            </div>
          </div>
          <div className="ask-section">
            <button className="ask-button">Ask Blockedu</button>
          </div>
        </div>
        <div className="kenburns-bg">
          <h1></h1>
        </div>
      </div>

      <div className="container featured-section">
        <h2 className="text-center">Develop your first smart contract</h2>
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'stretch',
            gap: '20px',
          }}
        >
          {/* First Card: Cutting Edge */}
          <div style={cardStyle}>
            <img src="cutting-edge-icon.png" alt="Cutting Edge" style={imgStyle} />
            <h5>Cutting Edge</h5>
            <p>Discover the most innovative Web3 contracts, showcasing fresh ideas and advanced techniques.</p>
          </div>

          {/* Second Card: Cookbook */}
          <div style={cardStyle}>
            <img src="cookbook-icon.png" alt="Cookbook" style={imgStyle} />
            <h5>Cookbook</h5>
            <p>A comprehensive guide to building your own smart contracts with step-by-step examples.</p>
          </div>

          {/* Third Card: OpenZeppelin */}
          <div style={cardStyle}>
            <img src="openzeppelin-icon.png" alt="OpenZeppelin" style={imgStyle} />
            <h5>OpenZeppelin</h5>
            <p>OpenZeppelin provides battle-tested smart contracts for Ethereum and EVM blockchains.</p>
          </div>
        </div>
      </div>

      <div className="container popular-frameworks-section">
        <h2 style={{ textAlign: 'center', marginRight: '20px' }}>Popular Ethereum Frameworks</h2>
        <div className="row justify-content-center">
          <div className="col-md-3">
            <div className="framework-card">
              <img src={require('./images/metamask.png')} alt="Metamask" />
              <h5>MetaMask</h5>
              <p>A crypto wallet and gateway to blockchain apps.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="framework-card">
              <img src={require('./images/alchemy.png')} alt="Alchemy" />
              <h5>Alchemy</h5>
              <p>The platform for blockchain developers to build apps.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="framework-card">
              <img src={require('./images/polygon.png')} alt="Polygon" />
              <h5>Infura</h5>
              <p>A suite of tools for building on Ethereum.</p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="framework-card">
              <img src={require('./images/hardhat.png')} alt="Hardhat" />
              <h5>Hardhat</h5>
              <p>A development environment for Ethereum.</p>
            </div>
          </div>
        </div>
      </div>

      <div>
        {/* Other sections */}
        <VideoSlideshow />
        {/* More sections */}
      </div>

      {/* Footer */}
      <footer>
        {/* Logo Section */}
        <div className="footer-logo">
          <img src={require('./images/logo.png')} alt="Logo" />
          <h4>Blockedu.dev</h4>
        </div>

        {/* Documentation Section */}
        <div className="footer-docs">
          <DocumentationSection />
        </div>

        {/* Navigation and Social Links */}
        <div className="footer-links">
          <ul>
            <li><a href="#">Privacy</a></li>
            <li><a href="#">Terms</a></li>
            <li><a href="#">Contact Us</a></li>
          </ul>
          <div className="footer-social">
            <a href="#" className="me-3"><i className="bi bi-medium"></i> Medium</a>
            <a href="#" className="me-3"><i className="bi bi-twitter"></i> Twitter</a>
            <a href="#"><i className="bi bi-discord"></i> Discord</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Separate Documentation Section
const DocumentationSection = () => {
  const docs = [
    { name: 'Ethereum Documentation', url: 'https://ethereum.org/en/developers/docs/' },
    { name: 'Solidity Documentation', url: 'https://docs.soliditylang.org/en/v0.8.19/' },
    { name: 'Web3.js Documentation', url: 'https://web3js.readthedocs.io/en/v1.7.3/' },
    { name: 'MetaMask Documentation', url: 'https://docs.metamask.io/guide/' },
    { name: 'Alchemy Documentation', url: 'https://docs.alchemy.com/alchemy/' },
  ];

  return (
    <div className="documentation-section">
      <h2 className="text-left">Documentation</h2>
      <ul className="documentation-list">
        {docs.map((doc, index) => (
          <li key={index}>
            <a href={doc.url} target="_blank" rel="noopener noreferrer">
              {doc.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Web;
