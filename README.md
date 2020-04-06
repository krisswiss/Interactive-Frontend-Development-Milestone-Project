# Arts Antennae

### Interactive-Frontend-Development-Milestone-Project

The purpose of this project is to create a website that allows users to search and indentify 4 categories within the Arts: Movie Theatre (film), Art Gallery, Museum (historical culture) and Library (literature).</br>
The website uses Google Maps API to search and display the categories on the map.</br>

#### TUTORIAL:</br>
1. Enter then select a country from the dropdown menu. Notice how the map zooms in over that country.</br>
2. Enter a city in the input field. Notice how the cities generated are restricted to the chosen country.</br>
3. Toggle the radio buttons to change the places you are searching for within that city.</br>
4. To revert everything and zoom out of the map, press reset.</br>

#### OR</br>
</br>
1. Press the "Find Me" button, which will locate the user (as long as they allow it in the browser), zoom into their location and display the appropriate Art Category based on selection.</br>
2. Toggle the radio buttons to change the places you are searching for.</br>
3. To revert everything and zoom out of the map, press reset.</br>

## UX

### User stories

- As a user A, I want to find a library near me. I open Arts Antennae site, click on the Find Me button and look at the map for the results.</br>
- As a user B, I want to find an Art Gallery in Paris, France. I open Arts Antennae, select France from Select Country dropdown, then input France into City search box and view the results on the map or in the table beneath. I have changed my mind and now prefer to watch a movie - I change Category to "Movie Theatre" and view the results.</br>
- As a user C, I want to find a Library in Warsaw. My friend has told me there is one of the most famous libraries there, but didn't tell me which country Warsaw is in. I skip "Select country" selection and just type in "Warsaw" into "Enter city" field. The map zooms in and displays the results.</br>
- As a user D, I want to find a Museum in Berlin. I type in "Berlin" into "Enter a city" field amd view the results. There is nothing there that appeals to me and I want to look at the entire map again - I press the "Reset" button - map zooms out and clears the results.</br>

 
### Strategy
The core focus in the design was to make it as easy as possible to access the information and location of selected venues on the site while striving for a simple, elegant and user-friendly design while upholding an artisic image. 

### Scope
For those accessing the website, I wanted to provide a simple, yet effective way of searching for different types of Art venues near the user's location and throughout the globe.

### Structure
All selectable options are positioned together on the left side of the screen. The map is positioned beside it, making it easy to change options and look at the results at the simultaneously. </br>
Additionally, all results are displayed in a table underneath, which is clickable and displays further details about the selected venue.

### Skeleton
Information is presented in a user friendly way - both on the map and as a list underneath.</br>
Additionally, in the footer section, authors copyrights, contact form (sends email) and links to follow were added.</br>

### Wireframes

#### Desktop
[Wireframe](https://github.com/krisswiss/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/Desktop.jpg)</br>

#### Mobile
[Options wireframe](https://github.com/krisswiss/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/Mobile-1.jpg)</br>
[Map wireframe](https://github.com/krisswiss/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/Mobile-2.jpg)</br>
[Footer wireframe](https://github.com/krisswiss/Interactive-Frontend-Development-Milestone-Project/blob/master/wireframes/Mobile-3.jpg)</br>

### Surface

Despite the minimalist approach, I was hoping to reflect the essence of my chosen project which is to locate four categories of arts in any chosen area, hence the choice of font and background image. The colours I chose for the header and footer were to complimment the background (a palate of oil paints) without causing distraction to the viewer but to allow a popping quality of distinction while remaining harmonious.</br>
I have chosen the satellite map type as the default as it further enhances the visual distinction while colourfully balancing the site. This defualt map type allows for a more artistically visual experience as apposed to the standard map type which in this particular case could obstruct the intended artisic appearance and therfore faith in this websites purpose, to locate artistic sites.  </br>
However, if the user wishes to opt for the standard map type, this option is still available to them.</br>

## Technologies
1.	HTML
2.	CSS
3.	Bootstrap
4.  Font Awesome.
5.	JavaScript.
6.  jQuery.
7.  EmailJS.
8.  Google Maps API.

### Existing Features:
-	Find Me button to locate user.
-	Manual Selection through "Select coutry" dropdown and "Enter a city" field.
-	Radio buttons to change Categories.
-	Reset button to Reset current selection and zoom out the map. I decided to leave Location Marker present so the user has constant clarity in relation to their location. 
-	Results table: upon clicking will generate info window above the venue with more detailed information and www link to the venues website. 
-	Contact form in footer section allow user to contact the admin of the site.
-	Social Links icons are clickable and will bring the user to the social media profiles of the author of the site.

### Features left to implement:
- In the future I would like to add directions from the users location to the venue near him/her.
- I would also like to style results table, so each line is in different color - similar to the background image.
- I would also like to add more Art Categories, but unfortunately, the 4 on the site are the only ones Google provides at the moment, so will have to wait for an update.
- I would also like to change the marker icons to reflect specific types of arts based on category selection.</br>

### Resolved bugs:

- When Reset button was pressed it supposed to center the map on Ireland - which is the same position at which the Map is Initialized, but it didn't fully do it.</br>
There was no error in the console, code looed 100% correct. I tried few different approaches, but none of them worked. I thought that the problem was with Reset funtion (especially Code line 420 to center the map on Ireland), but after taking a short brake, I came back and started looking at the rest of the code to track the exact path of the function. I discovered that it was in fact one of event listeners (line 104), was associated with incorrect function. I have changed it to Reset function, which solved the problem. </br>


## Testing
I believe I have achieved my goals by providing the user with clean, simple and intuitive design, all the while representing an artistic image.</br>

Information is easily accessible and easy to read.</br>

The contact form has been manually tested to ensure it will not allow to submit an empty field or incorrect email address. If you try to submit the contact form with an invalid email address, there will be an error noting the invalid email address. Furthermore, the 'required' attribute is added to the 'name,' 'email,' and 'message' fields, so if those fields are not filled in, the form will not submit. If the fields are valid, the page will send the email.</br>

Site has been tested for responsiveness with google inspect tool, but also on my own Laptop, tablet and mobile. In addition to this, I have shared my link with several friends, who have tested it all on different devices (Sony Z5 compact, Samsung S8, Huawei P20lite), operating systems(windows, mac os) and browsers(chrome, safari, internet explorer) and confirmed they didn’t come across any issues.</br>

HTML and CSS Code has been validated in w3 validator with no major issues.</br>
The only errors that are showing are for HTML code regarding the comments length.

## Deployment
Website is hosted using GitHub pages, deployed directly from the master branch.</br>
In order to deploy this to GitHub Pages, I first pushed my commits to GitHub. The process for this was as follows:</br>
1. Opened new terminal</br>
2. Added any files to be commited with command line 'git add .'.</br>
3. Then commited any final changes made with command line 'git commit -m "comment here"'.</br>
4. Checked status to ensure file tree was clean with command line 'git status'.</br>
5. Pushed files with command line 'git push'.</br>
Changes successfully pushed to remote repository, created in the beginning of the project.</br>
Then on the page where I view my code, and insights, there is a settings tab. I clicked into that link, an scrolled down to the section titled GitHub Pages, in which I then published my page.</br>
My site is published at [GitHub Sites](https://krisswiss.github.io/Interactive-Frontend-Development-Milestone-Project/).</br>
The deployed site updates automatically every time there is new commit added.</br>
To run locally, you can clone this repository directly into the editor of your choice by pasting 'git clone https://github.com/krisswiss/Die-Antwoord-Milestone-Project.git' into your terminal.</br>

## Media
The picture for the site was taken from:</br>
[Unsplash Pictures Library](https://unsplash.com/)

## Acknowledgements
I would like to thank:</br>
- Mariusz Klysinski, for helping me to understand Google Maps API documentation and how to navigate and read it.</br>
- Aaron McKenna, for pointing me in a right direction in terms of adding eventlisteners for my Find Me function.</br>

The footer section code was copied from [Code Institute Resume Mini Project](https://github.com/Code-Institute-Solutions/resume-miniproject-bootstrap4/tree/master/17-adding-contact-form) and changed to my needs.</br>

The inspiration for implementation of Google Maps API came from my partner Chakra O’Connor.</br>



***This is for educational use only.***
