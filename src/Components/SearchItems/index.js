import {Component} from 'react'

import DeleteItems from '../DeleteItems'

import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

class SearchItems extends Component {
  state = {searchInput: '', historyDetails: initialHistoryList}

  onChangeButton = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteListItem = id => {
    const {historyDetails} = this.state
    const filteredResult = historyDetails.filter(each => each.id !== id)
    console.log(filteredResult)
    this.setState({historyDetails: filteredResult})
  }

  render() {
    const {searchInput, historyDetails} = this.state
    console.log(searchInput)
    const searchResults = historyDetails.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="navbar-container">
          <div>
            <img
              className="history-image"
              alt="app logo"
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            />
          </div>
          <div className="search-logo-text-container">
            <div className="search-logo-container">
              <img
                className="search-icon"
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </div>
            <div>
              <input
                type="search"
                placeholder="search history"
                className="search-box"
                onChange={this.onChangeButton}
              />
            </div>
          </div>
        </div>

        {searchResults.length === 0 ? (
          <div className="empty-history-container">
            <p className="empty-history">There is no history to show</p>
          </div>
        ) : (
          <ul className="unordered-list">
            {searchResults.map(each => (
              <DeleteItems
                key={each.id}
                historyDetails={each}
                deleteListItem={this.deleteListItem}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default SearchItems
