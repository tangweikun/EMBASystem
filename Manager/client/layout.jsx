Layout = React.createClass({
  render() {
    let layout = {
      position: 'relative',
      left: '0px',
    }
    const styles = {
      body: {
        marginTop: '70px',
      }
    }
    return (
      <div style={layout} className="container">
        <Header />
        <div style={styles.body}>
        <Nav />
        {this.props.content}
      </div>
      </div>
    )
  }
})
