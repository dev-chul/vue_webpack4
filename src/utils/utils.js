// import upperFirst from 'lodash/upperFirst'
// import camelCase from 'lodash/camelCase'

export function getComponents (callback) {
  const requireComponent = require.context(
    '@/components',
    true,
    /[a-z]\w+\.(vue|js)$/
  )

  requireComponent.keys().forEach(filename => {
    const componentConfig = requireComponent(filename)

    // 개인적으로 소문자를 좋아함
    const componentName = (
      filename
        .split('/')
        .pop()
        .replace(/\.\w+$/, '')
    )

    // 추천 룰
    // const componentName = upperFirst(
    //   camelCase(
    //     filename
    //       .split('/')
    //       .pop()
    //       .replace(/\.\w+$/, '')
    //   )
    // )

    callback(componentName, componentConfig)
  })
}
