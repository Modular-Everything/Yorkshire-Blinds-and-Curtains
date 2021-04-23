import React from 'react';

const AppointmentForm = () => {
  return (
    <section className="contact-section style-two">
      <div className="auto-container">
        <div className="wrapper-box mb-30">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact-form-area">
                <div className="sec-title small">
                  <span className="sec-title-dec-two" />
                  <h2>
                    Do you need our help for your next project? Get in touch!
                  </h2>
                </div>

                <form
                  data-netlify="true"
                  className="contact-form"
                  name="contact"
                  method="POST"
                >
                  <input type="hidden" name="form-name" value="contact" />
                  <div className="row">
                    <div className="col-md-12 form-group">
                      <label htmlFor="typeOfBlinds">
                        <span>Your contact details:</span>
                        <input type="text" name="name" placeholder="Name" />
                      </label>
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <input
                        type="text"
                        name="number"
                        placeholder="Contact Number"
                      />
                    </div>
                    <div className="col-md-12 form-group">
                      <textarea name="address" placeholder="Address" />
                    </div>
                    <div className="col-md-4 form-group">
                      <label htmlFor="typeOfBlinds">
                        <span>What type of blinds are you looking for?</span>
                        <select name="typeOfBlinds">
                          <option>Verticals</option>
                          <option>Rollers</option>
                          <option>Romans</option>
                          <option>Wooden Venetians</option>
                          <option>Aluminium Venetians</option>
                          <option>Vision blinds</option>
                          <option>Pleated blinds</option>
                          <option>I do not know what I want</option>
                          <option>Curtains</option>
                          <option>I want a combination of blinds</option>
                          <option>I want blinds &amp; curtains</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-md-4 form-group">
                      <label htmlFor="howManyBlinds">
                        <span>How many blinds do you want us to measure?</span>
                        <input type="text" name="howManyBlinds" />
                      </label>
                    </div>
                    <div className="col-md-4 form-group">
                      <label htmlFor="budget">
                        <span>Do you have a budget?</span>
                        <select name="budget">
                          <option>I am not sure how much to expect</option>
                          <option>Up to £100.00</option>
                          <option>£100 - £200</option>
                          <option>£200 - £400</option>
                          <option>£400 - £600</option>
                          <option>£600 - £1000</option>
                          <option>£1000+</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-md-12 form-group">
                      <label htmlFor="estimate">
                        <span>
                          If you would like an estimate first, please tell us
                          how wide and how long each window is.
                        </span>
                        <textarea name="estimate" />
                      </label>
                    </div>
                    <div className="col-md-4 form-group">
                      <label htmlFor="date">
                        <span>Which day is good for you?</span>
                        <select name="date">
                          <option>Monday</option>
                          <option>Tuesday</option>
                          <option>Wednesday</option>
                          <option>Thursday</option>
                          <option>Friday</option>
                          <option>Saturday AM only</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-md-4 form-group">
                      <label htmlFor="time">
                        <span>What time slot would you like to book?</span>
                        <select name="time">
                          <option>9am - 1pm</option>
                          <option>1pm - 5pm</option>
                          <option>9am - 12pm Saturday</option>
                        </select>
                      </label>
                    </div>
                    <div className="col-md-4 form-group">
                      <label htmlFor="covid">
                        <span>
                          Have you or any of your household had any symptoms of
                          Covid-19?
                        </span>
                        <select name="covid">
                          <option>NO</option>
                          <option>YES</option>
                          <option>Yes but we have recovered</option>
                        </select>
                      </label>
                    </div>
                  </div>
                  <div className="col-md-4 form-group">
                    <button
                      className="theme-btn btn-style-one"
                      type="submit"
                      name="submit-form"
                    >
                      <span>BOOK AN APPOINTMENT</span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppointmentForm;
