const { useEffect } = require("react")

const useOnEnter = (func) => {
  useEffect(() => {
    const onKeydown = (evt) => {
      if (evt.keyCode === 13) {
        func()
      }
    }
    window.addEventListener("keydown", onKeydown)
    return () => window.removeEventListener("keydown", onKeydown)
  }, [func])
}

module.exports = useOnEnter
