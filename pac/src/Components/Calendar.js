import React, { Component } from 'react';

class Calendar extends Component {
  render() {

    return (
      <section id="calendar">
        <div className="row education"> 
          <div className="three columns header-col">
            <h3>Important Dates</h3>
            <hr></hr>
     <h6>First Meeting</h6>
     <br></br>
     <h6>Seminar 1</h6>
     <br></br>
     <h6>Potluck</h6>
          </div>
          <div className="nine columns main-col">
            <div className="row item">
              <div className="twelve columns">
              <iframe
                            title="calendar"
                             src="https://calendar.google.com/calendar/embed?src=mlekee6v03iq4r9ihuu2chqe00%40group.calendar.google.com&ctz=America%2FPhoenix"
                            style={{ border: "solid 5px white", backgroundColor: "white", padding:"10px", borderRadius:"3%"  }}
                        /> 
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Calendar;
