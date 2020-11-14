import React, { useEffect } from 'react'

// amChart
import * as am4core from '@amcharts/amcharts4/core'
import * as am4charts from '@amcharts/amcharts4/charts'
import am4themes_animated from '@amcharts/amcharts4/themes/animated'

am4core.useTheme(am4themes_animated)

export default ({ data }) => {

    useEffect(() => {

        if (data) {
            let chart = am4core.create("chartdiv", am4charts.XYChart)

            const formatedData = data.map(elm => ({ date: new Date(elm.createdAt), mbi: elm.mbi }))

            let categoryAxis = chart.xAxes.push(new am4charts.DateAxis())
            categoryAxis.dataFields.category = "date"
            categoryAxis.title.text = 'Date'

            let valueAxis = chart.yAxes.push(new am4charts.ValueAxis())
            valueAxis.title.text = 'MBI'

            let series = chart.series.push(new am4charts.LineSeries());
            series.dataFields.valueY = "mbi";
            series.dataFields.dateX = "date";


            chart.data = formatedData

            return () => {
                if (chart) chart.dispose()
            }
        }
    }, [data])

    return data ? <div id='chartdiv' style={ { width: '100%', height: '500px' } } /> : <p>'Loading'</p>
}