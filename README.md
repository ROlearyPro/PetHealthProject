# PetHealth MVP

## Project and Goals
My project here was ultimately to create a website that one could enter the name of a drug taken by an animal into, and search it: The goal of this was that this would allow them to find medical info about that drug, and any common side effects, thus allowing them to avoid prescribing ineffective or dangerous drugs to a patient, or ask a doctor if there might be different medicines that could be prescribed instead.

## Technologies Used
The main technologies used here were React and Cypress, the former to allow routing and fetching info, among other things, and the latter to facilitate end to end testing. Other than that, I made use of the openFDA database created by the US Food and Drug Administration, specifically the animal drug adverse event reports endpoint. The rest was made on my own!

## Challenges/Wins
I feel like there were a couple of main challenges I dealt with for this project. The first was the fact that drug brand names were largely masked, due to security/privacy reasons, as defined by the FDA. This meant I had to switch from my initial goal of just entering the name of the drug to having the user search for the active ingredient. In the end though, this was an easy fix to implement, mostly being annoying in how I had to move the goalposts in what I was trying to do. 
A much more difficult challenge was sorting through the enormous amount of information the database has for each and every entry, in combination with the fact that any given value had no guarantee of being present in the data; I would have chosen to just go through the effort of creating sections for all the important values, but I would have to be sure any values which might actually be displayed were present first, which required that I'm able to confirm that their parent containers are present first, and those parents' parents, and so on. In the end, I simply focused on a few very commonly included points of data to guarantee I would be able to display, and which would simply be omitted if not present. Even this required way more if statements than I was happy with, but I'm still glad I was able to do it at all, especially given I found this to be a problem only a day before the due date.

## Screenshots
<img width="1710" alt="Screenshot 2024-09-21 at 2 56 11 PM" src="https://github.com/user-attachments/assets/7dfd8b85-91b2-40b1-b0d7-7881bfae622e">

<img width="1710" alt="Screenshot 2024-09-21 at 2 56 24 PM" src="https://github.com/user-attachments/assets/b6c65984-990c-46c4-9db1-0d757f394589">

<img width="1710" alt="Screenshot 2024-09-21 at 2 56 38 PM" src="https://github.com/user-attachments/assets/5e85d814-7099-4e8d-814a-98f8f565ac01">

### Contributors
U.S. Food and Drug Administration for the endpoints;
Ryan O'Leary for most everything else.
