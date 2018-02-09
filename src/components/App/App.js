import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import injectSheet from '../../utils/jss'
import GlobalStyles from '../GlobalStyles'
import AppData from '../../containers/AppData'

const styles = theme => ({
  app: {
    background: theme.common.page,
    color: theme.text.default,
    minHeight: '100vh',
    paddingTop: 80,
    paddingBottom: 40,
    font: {
      family: theme.typography.fontFamily,
      size: theme.typography.fontSize,
      lineHeight: theme.typography.lineHeight,
    }
  }
})

class App extends PureComponent {
  static propTypes = {
    classes: PropTypes.objectOf(PropTypes.string).isRequired,
  }

  constructor(props) {
    super(props)
    this.state = {
      isClient: false,
    }
  }

  /**
   * Setting state in componentDidMount is an antipattern,
   * and causes double component render on client.
   *
   * But it's only one solution to avoid render something
   * in SSR (in this case some GraphQL component will break deployment)
   */
  componentDidMount() {
    // eslint-disable-next-line
    this.setState({isClient: true})
  }

  render() {
    const {classes} = this.props
    const {isClient} = this.state

    return (
      <GlobalStyles>
        <div className={classes.app}>
          {isClient && <AppData/>}
        </div>
      </GlobalStyles>
    )
  }
}

export default injectSheet(styles)(App)
