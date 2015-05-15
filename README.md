This is a presentation that has been held at the Universtity of Applied Sciences in Mannheim giving an introduction to Node.js on 05/15/2015.

# Live Example
The examples shown in the presentation can be found in the folder namend "nodeLiveExample".

Use the command 'node index.js' on in this folder to start the node servers which are used during the presentation (of course node has to be localy installed on your computer first).

# start the presentation
The presentation is based on reveal.js and can be started using the command 'grunt serve'. To open up the speaker notes just press 's' and the notes will show up in a second window.

# PDF export
It was necessary to export the slides including the speaker notes and the slide number. Therefore the Firefox-plugin "GrabThemAll" has been used to make screen shots of each slide. Afterwards the screen shots have been combined in one PDF.
In order for these screenshots to grab everything visible on the slides the fragments have to be disabled while configuring reveal in the "index.html" - just replace "fragments: true" with "fragments: false".

(Sadly it is not possible (yet?) to export the presentation including speaker notes or slide numbers using the build in PDF export in reveal.js. Therefore this detour with the screen shots hat to be taken.

## PDF export including speaker notes
In order to have a exportable version of the slides including the speaker notes one has to add the class "notesVisible" to the element with the ID "slidesContainer".

## Print version (white background for saving ink)
In order to save ink when printing this presentation change the stylesheet "moon.css" to "moonPrint.css" and add the class "printVersion" to the element with the ID "slidesContainer".