$(document).ready(function () {
    //Slider
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: false,
        slideWidth: 1200,
        responsive: true
    });

    //Posts
    var posts = [{
            title: 'Prueba de titulo 1',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum egestas arcu sit ametgravida. Cras justo magna, porta vel condimentum vel, sodales non purus. Donec congue nulla utluctus lobortis.Cras consequat sem at dolor luctus,et eleifend nisl hendrerit.Etiam vitaevehicula elit,at placerat massa.Aliquam placerat rhoncus lectus.Cras eget egestas dui,auctormaximus felis.In varius ac velit eu tincidunt.Suspendisse vel vestibulum velit,quis pharetranunc.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas.Nam pharetra vitae quam sit amet posuere.Nullam dictum tristique augue et porttitor.In et nulla at orci semper dignissim.Aenean sodales quis eros in lacinia.Aliquam lobortis a exvitae sollicitudin.Donec id ipsum quis neque commodo ultricies eu ac tortor'
        },
        {
            title: 'Prueba de titulo 2',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum egestas arcu sit ametgravida. Cras justo magna, porta vel condimentum vel, sodales non purus. Donec congue nulla utluctus lobortis.Cras consequat sem at dolor luctus,et eleifend nisl hendrerit.Etiam vitaevehicula elit,at placerat massa.Aliquam placerat rhoncus lectus.Cras eget egestas dui,auctormaximus felis.In varius ac velit eu tincidunt.Suspendisse vel vestibulum velit,quis pharetranunc.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas.Nam pharetra vitae quam sit amet posuere.Nullam dictum tristique augue et porttitor.In et nulla at orci semper dignissim.Aenean sodales quis eros in lacinia.Aliquam lobortis a exvitae sollicitudin.Donec id ipsum quis neque commodo ultricies eu ac tortor'
        },
        {
            title: 'Prueba de titulo 3',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum egestas arcu sit ametgravida. Cras justo magna, porta vel condimentum vel, sodales non purus. Donec congue nulla utluctus lobortis.Cras consequat sem at dolor luctus,et eleifend nisl hendrerit.Etiam vitaevehicula elit,at placerat massa.Aliquam placerat rhoncus lectus.Cras eget egestas dui,auctormaximus felis.In varius ac velit eu tincidunt.Suspendisse vel vestibulum velit,quis pharetranunc.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas.Nam pharetra vitae quam sit amet posuere.Nullam dictum tristique augue et porttitor.In et nulla at orci semper dignissim.Aenean sodales quis eros in lacinia.Aliquam lobortis a exvitae sollicitudin.Donec id ipsum quis neque commodo ultricies eu ac tortor'
        },
        {
            title: 'Prueba de titulo 4',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum egestas arcu sit ametgravida. Cras justo magna, porta vel condimentum vel, sodales non purus. Donec congue nulla utluctus lobortis.Cras consequat sem at dolor luctus,et eleifend nisl hendrerit.Etiam vitaevehicula elit,at placerat massa.Aliquam placerat rhoncus lectus.Cras eget egestas dui,auctormaximus felis.In varius ac velit eu tincidunt.Suspendisse vel vestibulum velit,quis pharetranunc.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas.Nam pharetra vitae quam sit amet posuere.Nullam dictum tristique augue et porttitor.In et nulla at orci semper dignissim.Aenean sodales quis eros in lacinia.Aliquam lobortis a exvitae sollicitudin.Donec id ipsum quis neque commodo ultricies eu ac tortor'
        },
        {
            title: 'Prueba de titulo 5',
            date: "Publicado el dia " + moment().date() + " de " + moment().format("MMMM") + " del " + moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum egestas arcu sit ametgravida. Cras justo magna, porta vel condimentum vel, sodales non purus. Donec congue nulla utluctus lobortis.Cras consequat sem at dolor luctus,et eleifend nisl hendrerit.Etiam vitaevehicula elit,at placerat massa.Aliquam placerat rhoncus lectus.Cras eget egestas dui,auctormaximus felis.In varius ac velit eu tincidunt.Suspendisse vel vestibulum velit,quis pharetranunc.Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpisegestas.Nam pharetra vitae quam sit amet posuere.Nullam dictum tristique augue et porttitor.In et nulla at orci semper dignissim.Aenean sodales quis eros in lacinia.Aliquam lobortis a exvitae sollicitudin.Donec id ipsum quis neque commodo ultricies eu ac tortor'
        },
    ];

    posts.forEach((item, index) => {
        var post = `
        <article class="articulos">
        <h2> ${item.title}</h2>
        <span class="date"> ${item.date}</span>
        <p>
          ${item.content}
        </p>
        <a href="#" class="buttonMore">Leer Mas</a>
    </article>
        `;
        $("#posts").append(post);

    });

    //Selector de tema
    var theme = $("#theme");
    $("#toGreen").click(function () {
        theme.attr("href", "css/green.css")
    });

    $("#toRed").click(function () {
        theme.attr("href", "css/red.css")
    });

    $("#toBlue").click(function () {
        theme.attr("href", "css/blue.css")
    });
});