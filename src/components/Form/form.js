import React, { useEffect } from 'react';

// import Dialog from '@material-ui/core/Dialog';

// import DialogContent from '@material-ui/core/DialogContent';
// import DialogTitle from '@material-ui/core/DialogTitle';
// import Card from '@material-ui/core/Card';
import { Field, reduxForm } from 'redux-form';
import styles from './form.module.css';

let FormTile = ({ props }) => {

  // const [open, setOpen] = React.useState(false);
  // const handleClickOpen = () => {
  //   setOpen(true);
  // };
  // const handleClose = (e) => {
  //   setOpen(false);
  // }
  const { handleSubmit } = props;
  return (
    <div className="App">
      <form onSubmit={handleSubmit}>

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
    </div>
  );
  // return (
  //   <form onSubmit={handleSubmit} className="form">
  //     <div className="field">
  //       <div className="control">
  //         <Field name="firstName" component="input" type="text" label="First Name" />
  //       </div>
  //     </div>

  //     <div className="field">
  //       <div className="control">
  //         <Field name="lastName" component="input" type="text" label="Last Name" />
  //       </div>
  //     </div>
  //     <div className="field">
  //       <div className="control">
  //         <button className="button is-link">Submit</button>
  //       </div>
  //     </div>

  //   </form>
  // )
}
//  <div className={styles.Container}>
// {/* <Card className={styles.Org} style={Object.assign({ color: '#484848', borderRadius: '16px' })} onClick={handleClickOpen}> <p>ORGANIZATION</p> </Card> */ }
// {/* <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
//         <DialogTitle id="form-dialog-title">Add a Organization Unit</DialogTitle>
//         <DialogContent> */}
// {/* <form onSubmit={handleSubmit}>
//         <Field
//           name="username"
//           component="input"
//           type="text"
//           placeholder="Username"
//         /> */}
// {/* <TextField
// 						autoFocus
// 						margin="dense"
// 						id="name"
// 						label="Organization"
// 						type="text"
// 						fullWidth
// 					/> */}

// {/* <DialogActions> */ }
// {/* <Button onClick={e => { handleClose(e) }} color="primary">
// 							Save
//           </Button> */}
// {/* <button type="submit" label="submit">Submit</button>
//       </form> */}
// {/* </DialogContent> */ }
// {/* </DialogActions> */ }
// {/* </Dialog> */ }
// </div>


// export default FormTile = reduxForm({
//   form: 'login',
// })(FormTile);

// export default FormTile;

export default reduxForm({
  form: 'login'
})(FormTile);
