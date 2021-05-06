
import './App.css';
import React from 'react';
import FormTile from './components/Form/form'
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';

// import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import { reduxForm, Field } from 'redux-form';
import Profile from './profile';

// let FormTile = ({ props }) => {
//   const handleSubmit = props;
//   // const [open, setOpen] = React.useState(false);
//   // const handleClickOpen = () => {
//   //   setOpen(true);
//   // };
//   // const handleClose = (e) => {
//   //   setOpen(false);
//   // }

//   return (
//     <form onSubmit={handleSubmit} className="form">
//       <div className="field">
//         <div className="control">
//           <Field name="firstName" component="input" type="text" label="First Name" />
//         </div>
//       </div>

//       <div className="field">
//         <div className="control">
//           <Field name="lastName" component="input" type="text" label="Last Name" />
//         </div>
//       </div>
//       <div className="field">
//         <div className="control">
//           <button className="button is-link">Submit</button>
//         </div>
//       </div>

//     </form>
//   )
// };
// FormTile = reduxForm({
//   form: 'login',
// })(FormTile);

// class App extends Component {
//   handlesubmit = values => {
//     console.log(JSON.stringify(values));
//     window.alert('hii');
//   };
//   render() {
function App(props) {
  const [open, setOpen] = React.useState(false);
  const [open1, setOpen1] = React.useState(false);
  const [openBU, setOpenBU] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = (e) => {
    setOpen(false);
  }
  const handleClickOpen1 = () => {
    setOpen1(true);
  };
  const handleClose1 = (e) => {
    setOpen1(false);
  }
  const handleClickOpenBU = () => {
    setOpenBU(true);
  };
  const handleCloseBU = (e) => {
    setOpenBU(false);
  }
  // const handleSubmit = (formValues) => {
  //   console.log(formValues);
  // }
  // return (
  //   <App>
  //     <FormTile onSubmit={handleSubmit} />
  //   </App>
  // )

  // console.log(props);
  const { handleSubmit } = props;
  return (
    <div className="App">
      <Card style={Object.assign({ color: '#484848', borderRadius: '16px' })} onClick={handleClickOpen}> <p>ORGANIZATION</p> </Card>

      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Organization Unit</DialogTitle>
        <form onSubmit={handleSubmit((formValues) => {
          console.log(formValues);
        })}>
          <label>
            FirstName:
        </label>
          <Field name="firstName" component="input" type="text" />
          <label>
            LastName:
        </label>
          <Field name="LastName" component="input" type="text" />

          <button type="submit" >Submit it</button>
        </form>
        {/* <FormTile onSubmit={this.handlesubmit} /> */}
      </Dialog>

      <Card style={Object.assign({ color: '#484848', borderRadius: '16px' })} onClick={handleClickOpenBU}>  BUSINESS UNIT </Card>
      <Dialog open={openBU} onClose={handleCloseBU} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Add a Business Unit</DialogTitle>
        <form onSubmit={handleSubmit((formValues) => {
          console.log(formValues);
        })}>
          <label>
            FirstName:
        </label>
          <Field name="fN" component="input" type="text" />
          <label>
            LastName:
        </label>
          <Field name="LN" component="input" type="text" />

          <button type="submit" >Submit it</button>
        </form>
      </Dialog>

      <Card style={Object.assign({ color: '#484848', borderRadius: '16px' })} onClick={handleClickOpen1}> <p>ORGANIZATION</p> </Card>
      <Dialog open={open1} onClose={handleClose1} >
        <Profile />
      </Dialog>

    </div>
  );
}

export default reduxForm({
  form: 'login'
})(App);
// export default App;