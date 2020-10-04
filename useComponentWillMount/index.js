const { useRef } = require("react")

module.exports = (func) => {
  const willMount = useRef(true)

  if (willMount.current) func()

  willMount.current = false
}
