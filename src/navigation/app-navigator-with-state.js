import { connect } from 'react-redux'
import { createReduxContainer } from 'react-navigation-redux-helpers'

import AppNavigator from './app-navigator'

// Listen everything that comes in 'root'
const ReduxContainer = createReduxContainer(AppNavigator, 'root')

export class AppNavigatorWithState extends ReduxContainer {

}

// Send props from the state
function mapStateToProps(state) {
  return {
    state: state.navigation,
  }
}

export default connect(mapStateToProps)(AppNavigatorWithState)
