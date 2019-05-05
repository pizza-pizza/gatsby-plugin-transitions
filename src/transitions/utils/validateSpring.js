import { config } from 'react-spring'

export default function validateSpring (spring) {
  const validated = {}
  Object.keys(spring).map(key => {
    switch (key) {
      case 'opacity':
        if (typeof spring[key] === 'number') {
          validated[key] = spring[key]
        }
        break
      case 'transform':
        if (spring[key] && typeof spring[key] === 'string') {
          validated[key] = spring[key]
        }
        break
      case 'config':

        if (typeof spring[key] === 'string') {
          validated[key] = { ...config[spring[key]] || {}, clamp: true }
        } else {
          validated[key] = spring[key]
        }
        break
    }
  })
  return validated
}