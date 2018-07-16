# Clientpannel

This project was developed using Angular 6.
Application data is stored on Google Firebase.
UI build with Bootstrap 4.

Try this app online, by the following link - https://customer-pannel.firebaseapp.com/


# ClientPanel app functionality:

1. User's Registration/ Login / Logout.
2. Create/Edit/Delete clients.
3. Manage client's information: 
 - See/change balance;
 - See/change client's data(email,phone,first and last name and UID(read only as it's randomly generated per each client));
 - See total owed balance amount of all clients;
4. Manage app settings in Settings page:
 - Allow Registration;
 - Disable/enable entering client's balance when adding new client;
 - Disable/enable entering client's balance when editing existing client;




# Short description of app usage :

1. First time being on page you need to register. Use any email and password to try this app(no email confirmation required).
 Without being registered no data will be displayed.
 
2. After registration you will be automatically logged in. Existing data will be retrieved from Google Firestorm database and displayed on dashboard screen.

3. With 'New' button you may create new client with it's personal information which will be sotred in Google Firestorm database(not localy).

4. With 'Deatails' button you may check client's personal info.

5. With 'Settings' link on  top navigation bar you may change app settings (settings description are self explanatory).

6. Use 'Logout' button to logout from app.

