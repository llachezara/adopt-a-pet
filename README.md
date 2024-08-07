# AdoptAPet

This project was generated with [Vite](https://vitejs.dev/) and uses React version 18.3.1.

## Overview

**AdoptAPet** is a web application built using **React** for the frontend and **Firebase** for backend services. **Firebase** is utilized for various backend functionalities, including:

- **Authentication**: Handles user registration, login, and authentication. Firebase Authentication provides secure and simple ways to manage user sessions.
- **Firestore**: Used as the NoSQL database to store and retrieve pet adoption profiles and user information.

## 🚀 Features

### 🔑 User Authentication and Registration
- **Guest Access**: Guests, or users who are not logged in, can browse the dashboard and view pet details but cannot adopt a pet or view owner contact details.
- **User Login and Registration**: Users can register for an account or log in to gain full access to the platform, including the ability to create, edit, and delete adoption profiles.

### 🐾 Pet Adoption Profiles
- **Dashboard Access**: All users can view the available pets listed on the dashboard. Guests can see pet details, but adoption actions are restricted to logged-in users.
- **Profile Creation**: Authenticated users can create detailed adoption profiles for pets, including information like name, breed, age, health information and an optional image.
- **Adopt a Pet**: Once logged in, users can adopt a pet by clicking the "Adopt" button on the pet's details page. Adopting a pet reveals the owner's contact details.
- **Profile Management**: Users who have created a profile can edit or delete it. Only the creator of the profile has the authority to make these changes.

### 📊 Dashboard Features: Pagination and Filters
- **Pagination**: The dashboard currently lists all available pets. **Pagination is planned but not yet implemented**, so all pets are displayed on a single page.
- **Filter/Search**: While users can browse the dashboard, **a search and filter function** to easily find specific pets based on criteria like breed or age is **not yet available**.

### ⭐ Likes Page and User Profile Details
- **Likes Page**: A **"Likes" page, where users can view and manage pets they have shown interest in, is planned but not yet implemented**. The link to this page is present in the navigation bar for authenticated users.
- **User Profile Details**: A **user profile section is planned to allow users to manage their personal details. This feature is not yet available**, but a placeholder link is present in the navigation bar when a user is logged in.

### 🛠️ Pet Details and Management
- **Viewing Details**: Any user can explore detailed information about each pet, but only logged-in users can see the owner's contact details after adopting a pet.
- **Editing and Deleting Profiles**: Profile owners can edit or delete their pet profiles. Deleting a profile permanently removes it from the Firestore database after confirmation.

### 🛡️ Form Validation and Error Handling
- **Data Validation**: Forms are equipped with validation. Invalid forms are not accepted, and users receive error messages (**not very clear yet**).
- **Error Notifications**: The platform informs the users for errors or confirm successful actions.

### 🔒 Security and Access Control
- **Route Guards**: Access to sensitive pages like profile creation and editing is restricted to logged-in users. Additionally, only the owners of a profile can edit or delete it.

---

AdoptAPet is developed with **React** and **Firebase**, utilizing **React Router DOM** for navigation and **React Toastify** for notifications. This project is continually evolving, with future updates planned to enhance user experience and add new features.

**Note:** This project was developed for an exam and is not being actively maintained. Some features, such as **pagination**, **filter/search**, **Likes page**, and **user profile details**, are planned but **not yet implemented** in the current version.

 # Get started
 
 ### Clone the Repository

Clone this repository to your local machine using the following command:

```bash
git clone https://github.com/llachezara/adopt-a-pet.git
```
### Install Dependencies
Once you have cloned the repository, navigate into the project directory and install the dependencies using npm. Run the following command:
```bash
npm i
```
This will install all the required dependencies listed in the package.json file.

### Serve the Application
After installing the dependencies, you can serve the application locally using the following command:

```bash
npm run dev
```
By default, this will serve the application on http://localhost:5173/.

### Usage
Once the application is running, you can access it through your web browser using the specified port.
