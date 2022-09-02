import { baseUrl, clientUrl } from "boot/api";

function getResumePdf(resumeData) {
  const rd = JSON.parse(JSON.stringify(resumeData));
  return {
    content: [
      // INFO
      {
        stack: [
          rd.info.name,
          rd.info.title,
          rd.info.location,
          {
            text: "Email me",
            link: "mailto:" + rd.info.email,
            style: "link",
          },
          {
            text: "Github Profile",
            link: rd.info.github_profile,
            style: "link",
          },
        ],
      },
      {
        text: "Resume",
        style: "header",
        margin: 20,
      },
      {
        columns: [
          // SKILLS
          {
            width: "*",
            stack: [
              {
                text: "Skills",
                style: "subheader",
                margin: [0, 0, 0, 5],
              },
              {
                ul: rd.skills.map((o) => {
                  return {
                    text: o.name,
                  };
                }),
              },
            ],
          },
          // EDUCATION
          {
            width: "*",
            stack: [
              {
                text: "Education",
                style: "subheader",
                margin: [0, 0, 0, 5],
              },
              ...rd.education.map((o) => {
                return {
                  stack: [
                    {
                      text: o.school,
                      style: "bold",
                    },
                    {
                      text: o.major,
                      style: "primary",
                    },
                    {
                      text: o.years,
                      style: "caption",
                    },
                  ],
                  margin: [0, 0, 0, 5],
                };
              }),
            ],
          },
        ],
        margin: [0, 0, 0, 20],
      },

      // EXPERIENCE
      {
        columns: [
          {
            width: "*",
            stack: [
              {
                text: "Experience",
                style: "subheader",
                margin: [0, 0, 0, 5],
              },
              ...rd.experience.map((o) => {
                return {
                  stack: [
                    {
                      text: o.company,
                      style: "bold",
                    },
                    {
                      text: o.title,
                      style: "primary",
                    },
                    {
                      text: o.date,
                      style: "caption",
                    },
                    {
                      text: "Duties",
                      style: ["caption", "bold"],
                    },
                    {
                      ul: o.duties,
                    },
                  ],
                  margin: [0, 0, 0, 10],
                };
              }),
            ],
          },
        ],
      },

      // PROJECTS
      {
        columns: [
          {
            width: "*",
            stack: [
              {
                text: "Projects",
                style: "subheader",
                margin: [0, 0, 0, 5],
              },
              ...rd.projects.map((o) => {
                return {
                  stack: [
                    {
                      text: o.name,
                      style: "bold",
                    },
                    {
                      text: o.description,
                      style: "caption",
                    },
                    {
                      text: "Tech Used",
                      style: ["caption", "bold"],
                    },
                    {
                      ul: o.tech_used,
                    },
                    {
                      text: "Achievements",
                      style: ["caption", "bold"],
                    },
                    {
                      ul: o.achievements,
                    },
                  ],
                  margin: [0, 0, 0, 10],
                };
              }),
            ],
          },
        ],
      },

      // HOBBIES
      {
        columns: [
          {
            width: "*",
            stack: [
              {
                text: "Hobbies",
                style: "subheader",
                margin: [0, 0, 0, 5],
              },
              ...rd.hobbies.map((o) => {
                return {
                  stack: [
                    {
                      text: o.name,
                      style: "bold",
                    },
                    {
                      text: o.description,
                      style: "caption",
                    },
                  ],
                  margin: [0, 0, 0, 10],
                };
              }),
            ],
          },
        ],
      },

      // REFERENCES
      {
        columns: [
          {
            width: "*",
            stack: [
              {
                text: "References",
                style: "subheader",
                margin: [0, 0, 0, 5],
              },
              {
                text: "Email me for reference contact info",
                link: "mailto:" + rd.info.email,
                style: "link",
                margin: [0, 0, 0, 5],
              },
              ...rd.references.map((o) => {
                return {
                  stack: [
                    {
                      text: o.name,
                      style: "bold",
                    },
                    {
                      text: o.title,
                      style: "caption",
                    },
                  ],
                  margin: [0, 0, 0, 10],
                };
              }),
            ],
          },
        ],
      },

      {
        text: `This resume was generated using data from a custom FastApi REST API`,
        style: "primary",
        decoration: "underline",
        fontSize: 12,
        alignment: "center",
        margin: [0, 20, 0, 10],
      },
      {
        text: `To view the documentation for the API:`,
        style: "caption",
        fontSize: 10,
        alignment: "center",
        margin: [0, 0, 0, 10],
      },
      {
        text: "Click here",
        link: `${baseUrl}/docs`,
        style: "link",
        alignment: "center",
        margin: [0, 0, 0, 5],
      },
      {
        text: `To view this data as a webpage:`,
        style: "caption",
        fontSize: 10,
        alignment: "center",
        margin: [0, 0, 0, 10],
      },
      {
        text: "Click here",
        link: `${clientUrl}`,
        style: "link",
        alignment: "center",
        margin: [0, 0, 0, 5],
      },
      {
        text: `Or, to view this data in your terminal, enter this:`,
        style: "caption",
        fontSize: 10,
        alignment: "center",
        margin: [0, 0, 0, 10],
      },
      {
        text: ` curl -X 'GET' 'http://localhost:8000/' -H 'accept: application/json' `,
        style: "code",
        fontSize: 10,
        alignment: "center",
        margin: [0, 0, 0, 10],
      },
    ],
    pageSize: {
      width: 595.28,
      height: "auto",
    },
    styles: {
      link: {
        color: "blue",
        decoration: "underline",
      },
      header: {
        bold: true,
        fontSize: 15,
        alignment: "center",
        decoration: "underline",
      },
      subheader: {
        fontSize: 14,
        color: "#FF9966",
      },
      bold: {
        bold: true,
      },
      boldCenter: {
        bold: true,
        alignment: "center",
      },
      primary: {
        color: "#FF9966",
      },
      caption: {
        color: "#ffb5b5",
      },
      code: {
        color: "#c2fa00",
        background: "#000",
      },
    },
    defaultStyle: {
      color: "#494949",
      fontSize: 10,
      font: "Roboto",
    },
  };
}

export { getResumePdf };
