# "Hurry Up And Wait (HUAW) - The Military Life Simulator"

## SDI Blended Full Stack Project Scaffold
#### Project #3: Levi Fry, Kyle Dilick, Kevin Wolfe, Dayan Sauerbronn, Daniel Salazar

* * * * * * *

### Project Description:

"Hurry Up And Wait" (HUAW) is a military life simulator styled after Pokemon, but with the added wrinkle of not just focusing on damaging your opponent but in also attempting to mitigate doing damage to yourself.

Morale substitutes for Health, with various abilities subtracting and adding points to a player's Morale until either the player wins or their Morale is depleted, at which point they "die".


* * * * * * *

### Project Problem Statement:

>I am in line to get my CAC reset AGAIN, and I need something educational and entertaining to make valuable use of my time.

* * * * * * *

### Project Planning:

#### User Stories:
![User_stories](https://i.imgur.com/pCxWlyR.png)

#### Entity Relationship Diagram (ERD):
![ERD](https://i.imgur.com/X9NMULm.png)

#### Project Architecture:
![Architecture](https://i.imgur.com/xIUi25e.png)

#### Potential Game Types:
![Game_types](https://i.imgur.com/BPHN2Ky.png)

#### HUAW Intro Screen:
![Intro](https://i.imgur.com/LnuN3RV.png)

#### HUAW Wireframe:
![Wireframe](https://i.imgur.com/zjXLmfq.png)

* * * * * * *

### Installation:
1)  Ensure you have an active Internet connection since downloading dependencies is required.

2)  Ensure you have Docker installed and it is functional.

    >>For instructions on setting up Docker, click the link:  https://www.docker.com/products/docker-desktop/

>NOTE:  The following instructions need to be entered into your Linux terminal as written, followed by pressing the 'ENTER' key, for proper execution.

3)  Required dependencies:

    >npm install react-router-dom

    >npm install --saved styled-components

    >npm install @emotion/react @emotion/styled

    >npm install --save-dev cypress @testing-library/cypress

    >npm install --save-dev @testing-library/react

    >npm install msw

    >docker pull postgres

    >mkdir -p $HOME/docker/volumes/postgres

    >docker run --rm --name pg-docker -e POSTGRES_PASSWORD=docker -d -p 5432:5432 \-v $HOME/docker/volumes/postgres:/var/lib/postgresql/data postgres

    >docker ps -a

    >docker exec -it <Whatever your Docker container ID is> bash

    >psql -U postgres
