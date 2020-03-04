                //This is a variant of the code sourced from https://www.visualcinnamon.com/2016/05/smooth-color-legend-d3-svg-gradient.html to make a legend work with our visualization
                var defs = scatterplot.append("defs");

                var linGrad = defs.append("linearGradient")
                    .attr("id", "linear-gradient");
                
                linGrad
                        .attr("x1", "0%")
                        .attr("y1", "0%")
                        .attr("x2", "100%")
                        .attr("y2", "0%")
                    
                linGrad.append("stop")
                    .attr("offset", "0%")
                    .attr("stop-color", "red");

                linGrad.append("stop")
                    .attr("offset", "100%")
                    .attr("stop-color", "lime"); 
                
                scatterplot.append("rect")
                    .attr("width", 200)
                    .attr("height", 20)
                    .attr("x","143")
                    .attr("y","595")
                    .style("fill", "url(#linear-gradient)");