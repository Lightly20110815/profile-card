import './App.css'

function App() {
  // 头像URL
  const avatarUrl = "https://api.ddnsy.fun/avatar.webp"
  
  // 自定义字体（可选）
  const customFont = "PingFang SC" // 例如: "Noto Sans SC", "Microsoft YaHei"
  
  const locations = [
    { flag: '🇯🇵', name: '日本 Japan', cities: ['大阪', '京都', '奈良', '神户', '德岛', '东京', '横滨'] },
    { flag: '🇰🇷', name: '韩国 Korea', cities: ['济州岛'] },
    { flag: '🇭🇰', name: '香港 Hong Kong', cities: ['香港', '九龙', '新界'] },
    { flag: '🇷🇺', name: '俄罗斯 Russia', cities: ['海参崴', '伯力', '阿穆尔河畔共青城', '海兰泡'] },
  ]

  const attributes = [
    '18岁',
    '跨性别女性',
    'HRT・2022',
    '双相情感障碍',
    '全栈开发者',
    '无氪游民',
  ]

  const extraInfo = ['死硬左派', '不是在旅行就是在期待旅行', '']
  const tags = ['OC', 'Vocaloid', 'P社游戏', '山东济南']
  const notices = ['会有血图', '会使用精神活性药物', '会讨论政治和发表暴论', '会玩消失']
  const quotes = ['会屏蔽我不喜欢的人，同样，不喜欢我请屏蔽我。', '随时欢迎私信聊天扩列，我很闷，同城或周边也可线下。', '可解答计算机方面的问题，我兴趣广泛。']

  return (
    <div className="profile-card" style={customFont ? { fontFamily: `"${customFont}", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif` } : {}}>
      {/* 头部 */}
      <div className="header">
        <div className="avatar" style={{ backgroundImage: `url(${avatarUrl})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div className="header-info">
          <h1>
            𝒮𝓎 𝒴𝒶𝓃𝓃
            <span className="flag">🏳️‍⚧️</span>
          </h1>
          <div className="username">@yxrchina · 𝕊𝕪 𝕐𝕒𝕟𝕟</div>
          <div className="bio">「With You,Through All.」</div>
          <div className="website">—— Sy's Digital Garden 404yann.com</div>
        </div>
      </div>

      {/* 内容网格 */}
      <div className="content-grid">
        {/* 足迹 */}
        <div className="card">
          <div className="card-title">足迹</div>
          {locations.map((location, index) => (
            <div key={index} className="location-section">
              <div className="location-header">
                <div className="country-flag">{location.flag}</div>
                <div className="country-name">{location.name}</div>
              </div>
              <div className="cities">
                {location.cities.map((city, i) => (
                  <span key={i} className="city-tag">{city}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 属性 */}
        <div className="card">
          <div className="card-title">属性</div>
          
          <div className="info-grid">
            {attributes.map((attr, index) => (
              <div key={index} className="info-value">{attr}</div>
            ))}
          </div>

          <div className="extra-info">
            {extraInfo.map((info, index) => (
              info && <div key={index} className="extra-item">{info}</div>
            ))}
          </div>

          <div className="tags">
            {tags.map((tag, index) => (
              <span key={index} className="tag">{tag}</span>
            ))}
          </div>
        </div>

        {/* 注意 */}
        <div className="card">
          <div className="card-title">注意</div>
          <ul className="notice-list">
            {notices.map((notice, index) => (
              <li key={index} className="notice-item">
                <span className="notice-icon"></span>
                <span>{notice}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 想和你说 */}
        <div className="card">
          <div className="card-title">想和你说</div>
          {quotes.map((quote, index) => (
            <div key={index} className="quote-section">
              <div className="quote">{quote}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App