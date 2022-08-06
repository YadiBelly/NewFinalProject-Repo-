import React from 'react';


export const Reset = () => {
    return (
      <><div><br />
        <h5 align="center">Reset your Password below</h5><br/>
      </div><div class="row row-cols-4 justify-content-center"><form><div class="form-floating">
          <input type="password" class="form-control" id="floatingPassword" placeholder="Password"/>
            <label for="floatingPassword">Enter New Password Here!</label>
      </div>
      <div><br/></div><div class="col-auto text-center">
    <button type="submit" class="btn btn-primary mb-3">Submit</button>
  </div></form></div></>
             );
};