chrome.tabs.onCreated.addListener(function (tab) {
  console.log(tab)
  console.log(tab.url)
  console.log('fffffffffffff')
  if (checkIsDuckLink(tab.url)) {
    let originalUrl = getOriginalUrl(tab.url)
    chrome.tabs.update(tab.id, {
      url: originalUrl
    })
  }
})

function checkIsDuckLink (url) {
  let isDuck = false
  isDuck = url.startsWith('https://weixin110.qq.com/') || url.startsWith('https://support.weixin.qq.com/')
  return isDuck
}

function getOriginalUrl (url) {
  let start = url.indexOf('&url=')
  let end = url.indexOf('#wechat_redirect')
  end = end === -1 ? url.length : end
  let realUrl = url.substring(start + 5, end)
  realUrl = decodeURIComponent(realUrl)
  console.log(realUrl)
  return realUrl
}
