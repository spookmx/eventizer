Meteor.startup(function () {
    if (Events.find().count() === 0) {
        var events = [
            {
                title: 'My First Event',
                dateStart: '2015-10-18T13:45:45.000Z',
                dateEnd: '2015-10-18T13:45:45.000Z',
                category: 'General',
                description: 'Hell yeah! My very own first event...',
                featured: true,
                dateCreated: '2015-10-18T13:45:45.000Z',
                dateModified: '2015-10-18T13:45:45.000Z',
                alias: 'my-first-event'
      },{
                title: 'My Second Event',
                dateStart: '2015-10-18T13:45:45.000Z',
                dateEnd: '2015-10-18T13:45:45.000Z',
                category: 'Meetup',
                description: 'Wow! My very own second event',
                featured: false,
                dateCreated: '2015-10-18T13:45:45.000Z',
                dateModified: '2015-10-18T13:45:45.000Z',
                alias: 'my-second-event'
      }
    ];
        events.forEach(function (event) {
            Events.insert(event);
        });
    }
});