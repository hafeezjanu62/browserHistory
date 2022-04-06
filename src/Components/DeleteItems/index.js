import './index.css'

const DeleteItems = props => {
  const {historyDetails, deleteListItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyDetails

  const onDeleteHistory = () => {
    deleteListItem(id)
  }

  return (
    <li className="history-item-container">
      <div className="delete-logo-url">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-img" />
        <p className="title">{title}</p>
        <p className="domain-url">{domainUrl}</p>
      </div>
      <div className="delete-btn-container">
        <button
          className="delete-btn"
          testId="delete"
          type="button"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-img"
          />
        </button>
      </div>
    </li>
  )
}

export default DeleteItems
