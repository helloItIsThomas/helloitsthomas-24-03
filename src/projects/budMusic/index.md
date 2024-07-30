---
title: "bud music suite"
description: " "
layout: "layouts/projectBackC.njk"
modules:
  - name: "poppy"
    components:
      - type: imageTile
        data:
          rows:
            - images:
                - src: "assets/diaImg.png"
                  alt: "Image 1"
                - src: "assets/diaImg.png"
                  alt: "Image 2"
                - src: "assets/diaImg.png"
                  alt: "Image 2"
            - images:
                - src: "assets/diaImg.png"
                  alt: "Image 1"
                - src: "assets/diaImg.png"
                  alt: "Image 2"
                - src: "assets/diaImg.png"
                  alt: "Image 2"
      - type: fullWidthImage
        src: "assets/dhs.png"
      - type: text
        data:
          headline: "Project 1 Headline"
          cols:
            - src: "Here is some content for p 1"
            - src: "Here is some content for p 2"
      - type: appImage
        mainSrc: "assets/dhs.png"
        sideImages:
          - src: "assets/projects/snickers/logoD1.mp4"
            alt: "side img 1"
          - src: "assets/dhs.png"
            alt: "side image 2"
---
