import React from 'react';
import Heading from '../presentation//Heading';
import NavBar from '../presentation/NavBar';

export default function About() {

    return (
        <div>
            <div>
                <Heading/>
                <NavBar/>
                <br />
                <div>
                    <p className="about-blurb">DappFund is a decentralized application (or Dapp) for viewing, proposing, and voting on Dapp ideas among collective members of of the Fund. Proposals include a name, idea description, amount of funding requested, and a link to a code respository. Proposals that pass an up or down vote recieve the requested funds amount denominated in Ether (virtual currency) to their associated member's public Ethereum wallet address.</p>
                </div>
                <br />
            </div>
            <div>
                <br />
                <h3>Running this application</h3>
                <br />
                <p>This application requires an active connection to the Ethereum blockchain.</p>
                <p>The simplest way to connect to an active Fund is by installing the <a href="http://www.metamask.io">MetaMask</a> browser extension for Google Chrome</p>
                <h4>Using Metamask</h4>

                <p>Visit MetaMask's <a href="https://chrome.google.com/webstore/detail/nkbihfbeogaeaoehlefnkodbefgpgknn">Chrome Web Store page</a> to download the extension and learn more about it's role in running Ethereum applications</p>
                <p>To learn about alternative ways to connect to the Fund visit <a href="https://github.com/johnfkneafsey"> the official repo </a> </p>
            </div>
        </div>
    )}
