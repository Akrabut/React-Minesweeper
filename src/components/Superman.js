import React from 'react'
import { Menu, Icon, Button } from 'semantic-ui-react'
import { connect } from 'react-redux'
import { supermanActions } from '../actions/superman'

const colorTheme = { color: 'inherit' }

const Superman = props => {
  return (
    <Menu.Item>
      <Button className='superman-button'
        toggle active={props.superman}
        style={{ backgroundColor: 'white', color: '#21ba45' }}
        onClick={() => props.supermanActions(!props.superman)}>
        <p style={colorTheme}>
          Superman
          <Icon name={'superpowers'} style={colorTheme} />
        </p>
      </Button>
    </Menu.Item>
  )
}

const mapDispatchToProps = {
  supermanActions,
}

const mapStateToProps = state => {
  return {
    superman: state.superman,
  }
}

const connectedSuperman = connect(mapStateToProps, mapDispatchToProps)(Superman)
export default connectedSuperman