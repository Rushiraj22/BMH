import React, { useReducer } from 'react';
// import "./style.css";

export default function Signup() {
  const init = {
    username: '',
    password: '',
    fname: '',
    lname: '',
    email: '',
    contact: '',
    usertype: '',
    addline1: '',
    addline2: '',
    state: '',
    city: '',
    pincode: '',
    secque: '',
    ans: ''
  };

  var reducer = (state, action) => {
    switch (action.type) {
      case 'register':
        return { ...state, [action.field]: action.val };
    }
  };

  const [user, dispatch] = useReducer(reducer, init);

  var register = (e) => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(user),
    };

    fetch('http://localhost:8080/createruser', options)
      .then((res) => res.text())
      .then((msg) => {
        // setMsg(msg);
        console.log(msg);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className='form-container'>
      <form className='login-form signup-form'>
        <div className='mb-3'>
          <h4>Signup</h4>
        </div>
        <div className='mb-3'>
          {/* <label htmlFor='username'>Username : </label> */}
          <input
            type='text'
            placeholder='Enter Username'
            className='form-control form-control-sm'
            name='username'
            id='username'
            pattern='[A-Za-z]{5,14}'
            title='userid length must be atleast 5 characters and at most 15 characters'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3'>
          <input
            type='password'
            placeholder='Enter Password'
            name='password'
            id='pwd'
            className='form-control form-control-sm'
            pattern='(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}'
            title='Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Enter firstname'
            name='fname'
            id='fname'
            className='form-control form-control-sm'
            pattern='[A-Za-z]{5,14}'
            title='fname length must be atleast 5 characters and at most 15 characters'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3'>
          <input
            type='text'
            placeholder='Enter last name'
            name='lname'
            id='lname'
            className='form-control form-control-sm'
            pattern='[A-Za-z]{5,14}'
            title='lname length must be atleast 5 characters and at most 15 characters'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3'>
          <input
            type='email'
            placeholder='Enter email'
            name='email'
            id='email'
            className='form-control form-control-sm'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3'>
          <input
            type='number'
            placeholder='Enter contact no'
            name='contact'
            id='contact'
            className='form-control form-control-sm'
            pattern='[0-9]{10}'
            title='Enter valid contact no with 10 digit not prefix'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Select User type</label>
          <select
            className='form-control form-control-sm'
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          >
            <option defaultValue={''}>Choose...</option>
            <option>Owner</option>
            <option>Customer</option>
          </select>
        </div>
        <div className='mb-3'>
          <label htmlFor='inputAddress'>Address1</label>
          <input
            type='text'
            className='form-control form-control-sm'
            id='inputAddress'
            placeholder='1234 Main St'
            required
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='mb-3'>
          <label htmlFor='inputAddress2'>Address 2</label>
          <input
            type='text'
            className='form-control form-control-sm'
            id='inputAddress2'
            placeholder='Apartment, studio, or floor'
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <div className='form-row'>
          <div className='mb-3 col-md-6'>
            <label htmlFor='inputState'>State</label>
            <select
              name='state'
              id='inputState'
              className='form-control form-control-sm'
              onChange={(e) => {
                dispatch({
                  type: 'register',
                  field: e.target.name,
                  val: e.target.value,
                });
              }}
            >
              <option defaultValue={''}>Choose...</option>
              <option>Maharashtra</option>
              <option>Delhi</option>
              <option>Madhya-Prades</option>
            </select>
          </div>
          <div className='row'>
            <div className='mb-3 col-md-6'>
              <label htmlFor='inputCity'>City</label>
              <input
                type='text'
                className='form-control form-control-sm'
                id='inputCity'
                onChange={(e) => {
                  dispatch({
                    type: 'register',
                    field: e.target.name,
                    val: e.target.value,
                  });
                }}
              />
            </div>
            <div className='mb-3 col-md-6'>
              <label htmlFor='inputZip'>Pincode</label>
              <input
                type='text'
                className='form-control form-control-sm'
                id='inputZip'
                onChange={(e) => {
                  dispatch({
                    type: 'register',
                    field: e.target.name,
                    val: e.target.value,
                  });
                }}
              />
            </div>
          </div>
        </div>
        <div className='mb-3 form-row'>
          <label htmlFor='secque'>Select security question</label>
          <select
            name='secque'
            id='secque'
            className='form-control form-control-sm'
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          >
            <option defaultValue={''}>Choose...</option>
          </select>
        </div>
        <div className='mb-3 form-row'>
          <input
            type='text'
            className='form-control form-control-sm'
            name='ans'
            id='ans'
            placeholder='Enter answer'
            onChange={(e) => {
              dispatch({
                type: 'register',
                field: e.target.name,
                val: e.target.value,
              });
            }}
          />
        </div>
        <button
          type='submit'
          className='btn btn-primary'
          onClick={(e) => {
            register(e);
          }}
        >
          Register
        </button>
      </form>
    </div>
  );
}
