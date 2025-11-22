import './App.css'

function App() {
  // 头像URL
  const avatarUrl = "https://api.ddnsy.fun/avatar.webp"
  
  // 自定义字体（可选）
  const customFont = "PingFang SC" // 例如: "Noto Sans SC", "Microsoft YaHei"
  
  const locations = [
    { flag: '🇨🇳', name: '中国大陆 China Mainland', cities: ['合肥','沈阳','惠州','深圳','武汉'] },
    { flag: '🇭🇰', name: '香港 Hong Kong', cities: ['香港'] },
  ]

  const attributes = [
    'MTF',
    'HRT・2025.08.11',
    'MDD',
    '她 / She',
  ]

  const extraInfo = ['深夜内容生成机', '逃避现实专家', '社恐', '重度拖延症']
  const tags = ['Node.js + Vue + pnpm', 'Vocaloid', '404yann / ddnsy.fun', 'LGBTQ+', '旅行']
  const notices = ['情绪极端波动可能频繁出现', '会使用精神活性药物', '会讨论政治和发表暴论', '易被言语触发，非理性发言可能存在','不接受“控制感很强的人”靠近']
  const quotes = ['随时欢迎扩列，但请勿用强光刺穿我。', '我不求理解，但希望不被误解。', '喜欢一个人就温柔待她，别分析她。','请用温柔对待我，谢谢。']

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
          <a
            href="https://404yann.com"
            className="website"
            target="_blank"
            rel="noopener noreferrer"
          >
            —— Sy's Digital Garden
          </a>
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