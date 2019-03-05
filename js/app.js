class EventsClass {
  constructor() {
    this.events = [
      {
        date: 4,
        month: "Feb",
        title: "Workshop - Starting Your Own Business",
        day: "Mon",
        time: "6:00 PM - 8:00 PM"
      },
      {
        date: 5,
        month: "Feb",
        title: "Four Oaks Day Service Center Dedication",
        day: "Tue",
        time: "11:00 AM - 12:00 PM"
      },
      {
        date: 6,
        month: "Feb",
        title: "Parks, Recreation & Tourism Summer Jobs Fair",
        day: "Wed",
        time: "5:00 PM - 8:00 PM"
      },
      {
        date: 9,
        month: "Feb",
        title: "Parks, Recreation & Tourism Summer Jobs Fair",
        day: "Sat",
        time: "9:00 AM - 12:00 PM"
      }
    ];
    this.loadCalendar();
  }

  loadCalendar() {
    let eventsHtml = `<h5 class="card-title px-3">Calendar</h5>`;
    eventsHtml += this.events.reduce(
      (html, event) => (html += this.generateEventHtml(event)),
      ""
    );
    document.getElementById("eventsList").innerHTML = eventsHtml;
  }

  generateEventHtml(event) {
    return `
    <div class="card">
      <div class="card-header">
        <div class="container-fluid mx-0 px-0">
          <div class="row">
            <div class="col-3">
              <h2><span class="badge badge-secondary">${event.date}</span></h2>
              <p class="lead">${event.month}</p>
            </div>
            <div class="col-9">
              <h5 class="text-uppercase display-5">
                ${event.title}
              </h5>
              <ul class="list-inline">
                <li class="list-inline-item">
                  <i class="fa fa-calendar-o" aria-hidden="true"></i>
                  ${event.day}
                </li>
                <li class="list-inline-item">
                  <i class="fa fa-clock-o" aria-hidden="true"></i>
                  ${event.time}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">
          With supporting text below as a natural lead-in to
          additional content.
        </p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
      </div>
    </div>
    `;
  }
} //end class EventsClass

class NewsClass {
  constructor() {
    this.news = [
      {
        title: "Newport News and Partners to Host Regional Job Fair",
        summary:
          "To celebrate the dedication of the Four Oaks Day Service Center, the City of Newport News, Volunteers of America Chesapeake, Virginia Career Works - Greater Peninsula, and the Virginia Employment Commission are hosting a Job Fair on Tuesday, March 5, 2019..."
      },
      {
        title: "MARATHON WEEKEND BEGINS TOMORROW IN NEWPORT NEWS ",
        summary:
          "The City of Newport News’ fifth annual One City Marathon takes place Sunday and, with related events all weekend long, there are fun activities..."
      },
      {
        title: "JOB FAIRS FOR SUMMER PARKS & RECREATION POSITIONS",
        summary:
          "The Newport News Department of Parks, Recreation and Tourism is holding three job fairs next month to fill over 180 summer positions in various locations throughout the City. Some yea..."
      }
    ];
  }
}

window.addEventListener("load", () => {
  events = new EventsClass();
});
