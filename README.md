# svt-takehome-table

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This purpose of this app to display the current location and battery life of SVT devices. 

## Getting Started 🚀

First, run the development server:

```bash
cd svt-take-home 
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

<br>

## Usage 
Opening the app should display a table, of information of SVT robots fleetData. 

Sorting:
To Sort click on the header column you would like to filter by. This should toggle between descending and ascending sorts

Filtering:
- Add the ID number you like to filter by
- Select filter criteria (<, >, or =)
- Select Submit 

Colors of on battery column:
the color red in the battery column indicates the battery is less than 50%



<br>

What I would do next: 🗺
----

What I would do next:

Things that I think would be interesting to add would be:

1: More UI queue for the user, such as:
- An arrow in the header that indicates if the row is sorted in ascending or descending order. 
- A way to filter by low battery
- A way to filter by nearest or farthest robot from the user


------
2: A page that shows a room with a marker for the coordinates of a robot using something like https://js.devexpress.com/Demos/WidgetsGallery/Demo/VectorMap/FloorPlan/React/Light/

OR

one of the tools mentioned here:
https://blog.logrocket.com/build-indoor-maps-fabric-js-using-react/

---

3: A fun animation that shows something like Wall-e moving across a floor to show how far a given robot is from their goal. This would probably be in a more details page for a selected robot.

---

Thank you taking the time to review my take home! Hope to chat soon!

Cheers, 
Wes

