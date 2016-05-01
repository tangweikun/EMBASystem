Layout = React.createClass({
  render() {
    let layout = {
      position: 'relative',
      left: '0px',
    }
    const styles = {
      body: {
        marginTop: '65px',
      }
    }
    return (
      <div style={layout} className="container">
        <Header />
        <div style={styles.body} className='row'>
          <div style={styles.nav} className='col-md-3'>
            <Nav />
          </div>
          <div style={styles.container} className='col-md-9'>
            {this.props.content}
          </div>
      </div>
      </div>
    )
  }
})
