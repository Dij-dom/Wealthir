import error from './assets/404.png'

const NotFound = () => {
  return (
    <div style={{ color: '#fffee1' }}>
      <h2>Sometimes even the bravest adventurers get lost in the sea looking for something that doesn't exist!</h2>
      <img src={error} style={{ marginLeft: '400px' }} alt="Error" />
      <h4 style={{ marginLeft: '10px' }}>Report back at the <a href ='/'>docks</a></h4>
    </div>
  );
};

export default NotFound;
