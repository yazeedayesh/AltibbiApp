import React, { useEffect, useState } from "react";
import { Text, ScrollView, Dimensions, StyleSheet, View, ActivityIndicator } from "react-native";
import { LineChart } from "react-native-chart-kit";
import CovidApi from '../api/CovidApi';

const screenWidth = Dimensions.get("window").width;

const CovidScreen = () => {
  const [casesData, setCasesData] = useState([]);
  const [deathsData, setDeathsData] = useState([]);
  const [recoveredData, setRecoveredData] = useState([]);
  const [dates, setDates] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await CovidApi.fetchCovidData();
        
        if (!data || !data.dates || !data.casesData || !data.deathsData) {
          throw new Error("Invalid data format");
        }

        setDates(data.dates.slice(0, 7)); 
        setCasesData(data.casesData.slice(0, 7)); 
        setDeathsData(data.deathsData.slice(0, 7)); 
        setRecoveredData(data.recoveredData ? data.recoveredData.slice(0, 7) : new Array(7).fill(0));
        
        setError(null);
      } catch (error) {
        console.error("Error fetching data: ", error);
        setError("Failed to load COVID-19 data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const chartConfig = {
    backgroundColor: "#1c313a",
    backgroundGradientFrom: "#455a64",
    backgroundGradientTo: "#607d8b",
    decimalPlaces: 0,
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    style: { borderRadius: 16 },
    propsForDots: { r: "4", strokeWidth: "2", stroke: "#ffa726" },
  };

  if (loading) {
    return (
      <View style={styles.loaderContainer}>
      <ActivityIndicator size="large" color="#3498db" />
      <Text style={styles.loadingText}></Text>
    </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (dates.length === 0) {
    return (
      <View style={styles.container}>
        <Text>No data available</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}
    showsVerticalScrollIndicator={false}
  >
      <Text style={styles.title}>COVID-19 Data (Last 7 Days)</Text>

      {/* رسم الحالات */}
      <LineChart
        data={{
          labels: dates, 
          datasets: [{ 
            data: casesData, 
            color: () => "green", 
            strokeWidth: 2 
          }],
          legend: ["Cases"],
        }}
        width={screenWidth - 16}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />

      <LineChart
        data={{
          labels: dates,
          datasets: [{ 
            data: deathsData, 
            color: () => "red", 
            strokeWidth: 2 
          }],
          legend: ["Deaths"],
        }}
        width={screenWidth - 16}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />

      <LineChart
        data={{
          labels: dates,
          datasets: [
            {
              data: recoveredData, 
              color: () => "blue",
              strokeWidth: 2,
            },
          ],
          legend: ["Recovered"],
        }}
        width={screenWidth - 16}
        height={220}
        chartConfig={chartConfig}
        style={styles.chart}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    padding: 8, 
    backgroundColor: "#f5f5f5",
  },
  title: { 
    textAlign: "center", 
    fontSize: 18, 
    fontWeight: "bold", 
    marginBottom: 16 
  },
  chart: { 
    marginVertical: 8, 
    borderRadius: 16 
  },
  errorText: {
    color: 'red',
    fontSize: 16
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 18,
    color: '#3498db',
  }
});

export default CovidScreen;