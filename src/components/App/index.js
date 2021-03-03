import React from 'react';
import styled from 'styled-components';
import Log from '../Log'
import { OpenSeaPort, Network } from 'opensea-js';
import { web3Provider, onNetworkUpdate, OPENSEA_JS_URL, GITHUB_URL } from '../../constants';

export default class App extends React.Component {

  state = {
    accountAddress: null
  }

  constructor(props) {
    super(props)
    this.onChangeAddress()
    onNetworkUpdate(this.onChangeAddress)
  }

  onChangeAddress = () => {
    this.seaport = new OpenSeaPort(web3Provider, {
      networkName: Network.Rinkeby
    })
    this.web3 = this.seaport.web3
    this.web3.eth.getAccounts((err, res) => {
      this.setState({
        accountAddress: res[0]
      })
    })
  }

  render() {
    return (
      <div>
        <Header>
          <nav>
            <ul id="desktop-tab-1">
              <li><a href="/about.html" class="selected">HOME</a></li>
              <li><a href="/about.html" class="selected">MASTERPIECES</a></li>
              <li><a href="/about.html" class="selected">CREATORS</a></li>
              <li><a href="/about.html" class="selected">BUYERS</a></li>
            </ul>
              <div class="logo">
              <h1>
                _A MUSUEM FOR UNIVERSAL CREATORS_
              </h1>
              </div>
            <ul id="desktop-tab-2">
              <li><a href="/about.html" class="selected">ACCOUNT</a></li>
              <li><a href="/about.html" class="selected">WALLET</a></li>
              <li><a href="/about.html" class="selected">WISHLIST</a></li>
              <li><a href="/about.html" class="selected">FAQ</a></li>
            </ul>    
          </nav>
        </Header>
        <main>
          <Log
            seaport={this.seaport}
            accountAddress={this.state.accountAddress} />
        </main>
      </div>
    )
  }
}

const Header = styled.header`
  border-bottom: 1px solid lightgrey;
  padding: 10px;
  text-align: center;
  background-color: #f4f9fd;

  h1 {
    font-size: 1rem;
  }

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .logo img {
  width: 200px; }

  nav > ul {
    display: flex;
    flex-direction: column;
    margin: 0;
    padding: 0;
    list-style: none;
  }

  ul#desktop-tab-1 {
    align-items: flex-start;
  }

  ul#desktop-tab-2 {
    align-items: flex-end;
  }

  nav > ul > li {
    margin: 0 2rem;
    color: #FFF;
  }


  h6 img {
    width: 24px;
  }
`

const ImgRibbon = styled.img`
  width: 150px;
  position: absolute;
  top: 0;
  right: 0;
  border: 0;

  @media(max-width: 600px) {
    width: 80px;
  }
`