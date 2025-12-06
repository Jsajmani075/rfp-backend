RPF Automation & Vendor Proposal System
Overview

This project provides a simple workflow where a user can write any requirement in a messy or unstructured format, and the system converts that into a usable RPF entry.
The user can then choose which vendors they want to send this requirement to, and those vendors will receive an email containing the RPF details.

Once vendors reply with their proposals, the user can request AI-based recommendations.
The AI engine analyzes all proposals and generates a ranked list based on clarity, pricing, delivery details, and overall quality.

This makes the entire proposal-handling process faster, cleaner, and more automated.

Key Features

1.Users can write their requirement in any messy, unformatted text.

2.Requirement gets saved and can be sent to selected vendors.

3.Vendors receive email notifications and submit proposals.

4.Users may request AI recommendations on vendor proposals anytime.

5.AI automatically assigns a rank to each proposal.

6.Clean folder structure with proper controllers, routes, and validations

Tech Stack

1.Node.js

2.Express.js

3.PostgreSQL + Sequelize ORM

4.Redis (for caching)

5.Zod / Joi (if validation is implemented)

6.Brevo (for email sending)

7.google script(to extract emil content)

Local Setup

1.git clone <repo-url>
2.cd rfp-backend
3.npm install
4.npm run setup(This command will create the database and run all migrations and seed all seeder)
5.npm run start:dev( To Start the Project in Development Mode)
6.copy all env keys from env.sample
This will launch the development server using nodemon.
How the System Works
1. User submits a requirement

Method: POST
Endpoint: /rpf

The user can enter any requirement — even in a messy or unstructured format.
Example:
"Bro, I need some decoration urgently for a wedding… also need mixed sweets around 8–10 kg."

The system stores the requirement exactly as the user submits it.

2. User retrieves all RPF entries

Method: GET
Endpoint: /rpf

The user can view all the RPFs they have created.

3. User selects specific vendors

Method: POST
Endpoint: /rpf/send

The user selects one or more vendors to send the requirement to.
Each selected vendor receives an email containing the RPF details and instructions on how to submit their proposal.

4. Vendors submit proposals

Method: POST
Endpoint: /proposal/vendor

Vendors respond by submitting their proposals through this endpoint.
All proposals are saved in the database.
(These submissions may also come via a Google Script webhook.)

5. User requests AI recommendations

Method: POST
Endpoint: /proposal/recommendations

When the user wants AI insights, they can trigger this endpoint.
The AI processes all vendor proposals and returns ranked recommendations based on quality, clarity, pricing, and other metrics.

6.User can checkList of Vendors and also details of particular vendor
