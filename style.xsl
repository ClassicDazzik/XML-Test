<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0"
xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
    <xsl:template match="/">
        <html>
            <head>
                <title>XML Test</title>
            </head>
            <body>
                <h1>Movie List</h1>
                <hr/>
                <xsl:for-each select="movielist/movie">
                    <div>
                        <h2><xsl:value-of select="name"/></h2>
                        <p>Director: <xsl:value-of select="director"/></p>
                        <p>Released on <xsl:value-of select="date"/></p>
                        <p>Runtime: <xsl:value-of select="runtime"/></p>
                        <p>Budget: <xsl:value-of select="budget"/></p>
                    </div>
                </xsl:for-each>
            </body>
        </html>
    </xsl:template>
</xsl:stylesheet>