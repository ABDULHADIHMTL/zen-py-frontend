import React, { useState, useEffect } from 'react';

const TrainingPowerBI = () => {
  const [currentTime, setCurrentTime] = useState('');
  const [hoveredPoint, setHoveredPoint] = useState(null);

  // Sales data for the trend points with coordinates for line connections
  const salesData = [
    { month: 'Jan', value: '$120K', left: '10%', bottom: '20%', x: 10, y: 20 },
    { month: 'Mar', value: '$210K', left: '30%', bottom: '35%', x: 30, y: 35 },
    { month: 'May', value: '$360K', left: '50%', bottom: '60%', x: 50, y: 60 },
    { month: 'Jul', value: '$240K', left: '70%', bottom: '40%', x: 70, y: 40 },
    { month: 'Sep', value: '$450K', left: '90%', bottom: '75%', x: 90, y: 75 }
  ];

  // Function to calculate SVG path for connecting lines
  const getLinePath = () => {
    if (salesData.length === 0) return '';
    
    let path = `M ${salesData[0].x} ${100 - salesData[0].y}`;
    
    for (let i = 1; i < salesData.length; i++) {
      path += ` L ${salesData[i].x} ${100 - salesData[i].y}`;
    }
    
    return path;
  };

  // Update time every second
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const dateString = now.toLocaleDateString('en-US', options);
      const timeString = now.toLocaleTimeString('en-US', {
        hour12: false,
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      });
      setCurrentTime(`${dateString} ${timeString}`);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={styles.powerbiTraining}>
      <div style={styles.trainingHero}>
        <div style={styles.heroContent}>
          <h1 style={styles.heroTitle}>Power BI Training Program</h1>
          <p style={styles.heroText}>Master data visualization and business intelligence with our comprehensive Power BI training</p>
          <button style={styles.ctaButton}>Enroll Now</button>
        </div>
      </div>

      <div style={styles.dashboardPreview}>
        <h2 style={styles.sectionTitle}>Interactive Power BI Dashboard Example</h2>
        <p style={styles.sectionSubtitle}>Here's what you'll learn to create with our training program:</p>
        
        {/* Professional Dashboard Image Section */}
        <div style={styles.professionalDashboard}>
          <img 
            src="https://images.pexels.com/photos/735911/pexels-photo-735911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
            alt="Professional Power BI Dashboard" 
            style={styles.dashboardImage}
          />
          <div style={styles.imageCaption}>
            Example of a professional sales dashboard created in Power BI
          </div>
        </div>

        <div style={styles.dashboardContainer}>
          <div style={styles.dashboardHeader}>
            <div style={styles.headerItem}>Grocery Sales Analytics Dashboard</div>
            <div style={styles.headerItem}>Last Updated: {currentTime}</div>
          </div>
          
          <div style={styles.dashboardContent}>
            <div style={styles.kpiCards}>
              <div style={{...styles.kpiCard, backgroundColor: '#e77eebff'}}>
                <h3 style={styles.kpiTitle}>Total Revenue</h3>
                <p style={styles.kpiValue}>$1,243,890</p>
                <div style={styles.trendUp}>↑ 12.5%</div>
              </div>
              <div style={{...styles.kpiCard, backgroundColor: '#2196F3'}}>
                <h3 style={styles.kpiTitle}>Total Units Sold</h3>
                <p style={styles.kpiValue}>542,687</p>
                <div style={styles.trendUp}>↑ 8.3%</div>
              </div>
              <div style={{...styles.kpiCard, backgroundColor: '#FF9800'}}>
                <h3 style={styles.kpiTitle}>Avg. Order Value</h3>
                <p style={styles.kpiValue}>$45.67</p>
                <div style={styles.trendUp}>↑ 3.2%</div>
              </div>
              <div style={{...styles.kpiCard, backgroundColor: '#F44336'}}>
                <h3 style={styles.kpiTitle}>Stores</h3>
                <p style={styles.kpiValue}>4</p>
                <div style={styles.trendNeutral}>→</div>
              </div>
            </div>
            
            <div style={styles.chartsRow}>
              <div style={{...styles.chartContainer, backgroundColor: '#1E88E5'}}>
                <h4 style={styles.chartTitle}>Revenue by Product Category</h4>
                <div style={styles.chartPlaceholder}>
                  <div style={styles.barGraphContainer}>
                    <div style={{...styles.barWithLabel, left: '5%', height: '80%', backgroundColor: '#db13e2ff'}}>
                      <div style={styles.barValue}>$423K</div>
                      <div style={styles.barLabel}>Dairy</div>
                      <div style={styles.barPercentage}>34%</div>
                    </div>
                    <div style={{...styles.barWithLabel, left: '30%', height: '65%', backgroundColor: '#dceb16ff'}}>
                      <div style={styles.barValue}>$342K</div>
                      <div style={styles.barLabel}>Fruits</div>
                      <div style={styles.barPercentage}>27.5%</div>
                    </div>
                    <div style={{...styles.barWithLabel, left: '55%', height: '45%', backgroundColor: '#1976D2'}}>
                      <div style={styles.barValue}>$287K</div>
                      <div style={styles.barLabel}>Ice Cream</div>
                      <div style={styles.barPercentage}>23%</div>
                    </div>
                    <div style={{...styles.barWithLabel, left: '80%', height: '30%', backgroundColor: '#f6f8faff'}}>
                      <div style={styles.barValue}>$191K</div>
                      <div style={styles.barLabel}>Cereal</div>
                      <div style={styles.barPercentage}>15.5%</div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Enhanced Monthly Sales Trend with Connected Lines */}
              <div style={{...styles.chartContainer, backgroundColor: '#43A047'}}>
                <h4 style={styles.chartTitle}>Monthly Sales Trend</h4>
                <div style={styles.chartPlaceholder}>
                  <div style={styles.lineChart}>
                    {/* SVG for connected line */}
                    <svg style={styles.trendLineSVG} viewBox="0 0 100 100" preserveAspectRatio="none">
                      {/* Main trend line connecting all points */}
                      <path 
                        d={getLinePath()} 
                        fill="none" 
                        stroke="#FFFFFF" 
                        strokeWidth="0.8" 
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      
                      {/* Optional: Add a filled area under the line */}
                      <path 
                        d={`${getLinePath()} L 100 100 L 0 100 Z`} 
                        fill="rgba(255, 255, 255, 0.1)" 
                        stroke="none"
                      />
                    </svg>
                    
                    {/* Data Points with Hover Effects */}
                    {salesData.map((point, index) => (
                      <div 
                        key={index}
                        className="data-point"
                        style={{
                          ...styles.dataPoint,
                          left: point.left,
                          bottom: point.bottom,
                          backgroundColor: hoveredPoint === index ? '#FFD700' : '#FFFFFF',
                          transform: hoveredPoint === index ? 'translate(-50%, 50%) scale(1.3)' : 'translate(-50%, 50%)',
                          zIndex: hoveredPoint === index ? '20' : '2'
                        }}
                        onMouseEnter={() => setHoveredPoint(index)}
                        onMouseLeave={() => setHoveredPoint(null)}
                      >
                        {/* Hover Tooltip */}
                        {hoveredPoint === index && (
                          <div style={styles.tooltip}>
                            <div style={styles.tooltipContent}>
                              {point.month}: {point.value}
                            </div>
                            <div style={styles.tooltipArrow}></div>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            
            <div style={styles.chartsRow}>
              <div style={{...styles.chartContainer, backgroundColor: '#5ae0daff'}}>
                <h4 style={styles.chartTitle}>Sales by Store</h4>
                <div style={styles.chartPlaceholder}>
                  <div style={styles.pieChart}>
                    <div style={styles.pieSlice1}></div>
                    <div style={styles.pieSlice2}></div>
                    <div style={styles.pieSlice3}></div>
                    <div style={styles.pieSlice4}></div>
                  </div>
                  <div style={styles.storeLegend}>
                    <div style={styles.legendItem}>
                      <span style={{...styles.legendColor, backgroundColor: '#4A148C'}}></span>
                      <span style={styles.legendText}>North: 35% ($435K)</span>
                    </div>
                    <div style={styles.legendItem}>
                      <span style={{...styles.legendColor, backgroundColor: '#0cce46ff'}}></span>
                      <span style={styles.legendText}>South: 30% ($373K)</span>
                    </div>
                    <div style={styles.legendItem}>
                      <span style={{...styles.legendColor, backgroundColor: '#8daa24ff'}}></span>
                      <span style={styles.legendText}>East: 20% ($249K)</span>
                    </div>
                    <div style={styles.legendItem}>
                      <span style={{...styles.legendColor, backgroundColor: '#9C27B0'}}></span>
                      <span style={styles.legendText}>West: 15% ($186K)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div style={{...styles.chartContainer, backgroundColor: '#E53935'}}>
                <h4 style={styles.chartTitle}>Top Performing Products</h4>
                <div style={styles.topProducts}>
                  <div style={styles.productRow}>
                    <span>Breyers Ice Cream</span>
                    <span>$124,560</span>
                  </div>
                  <div style={styles.productRow}>
                    <span>Special K Cereal</span>
                    <span>$98,745</span>
                  </div>
                  <div style={styles.productRow}>
                    <span>Whole Milk</span>
                    <span>$87,320</span>
                  </div>
                  <div style={styles.productRow}>
                    <span>Edies Ice Cream</span>
                    <span>$76,540</span>
                  </div>
                  <div style={styles.productRow}>
                    <span>Red Grapes</span>
                    <span>$65,430</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={styles.trainingDetails}>
        <h2 style={styles.sectionTitle}>What You'll Learn</h2>
        <div style={styles.learningModules}>
          <div style={styles.module}>
            <h3 style={styles.moduleTitle}>Data Import & Transformation</h3>
            <p style={styles.moduleText}>Learn to connect to various data sources and transform raw data into analysis-ready formats</p>
          </div>
          <div style={styles.module}>
            <h3 style={styles.moduleTitle}>Data Modeling</h3>
            <p style={styles.moduleText}>Master relationships, DAX formulas, and creating efficient data models</p>
          </div>
          <div style={styles.module}>
            <h3 style={styles.moduleTitle}>Visualization Techniques</h3>
            <p style={styles.moduleText}>Create compelling and interactive visualizations that tell data stories</p>
          </div>
          <div style={styles.module}>
            <h3 style={styles.moduleTitle}>Dashboard Design</h3>
            <p style={styles.moduleText}>Design professional dashboards with proper layout and user experience principles</p>
          </div>
          <div style={styles.module}>
            <h3 style={styles.moduleTitle}>Advanced Analytics</h3>
            <p style={styles.moduleText}>Implement advanced analytics including forecasting, clustering, and AI insights</p>
          </div>
          <div style={styles.module}>
            <h3 style={styles.moduleTitle}>Sharing & Collaboration</h3>
            <p style={styles.moduleText}>Publish reports, manage access, and collaborate with Power BI Service</p>
          </div>
        </div>
      </div>

      <div style={styles.enrollmentSection}>
        <h2 style={styles.sectionTitle}>Ready to Master Power BI?</h2>
        <p style={styles.enrollmentText}>Join our next cohort and transform your data into insights</p>
        <button style={styles.enrollButton}>Enroll Now</button>
      </div>
    </div>
  );
};

// Enhanced CSS styles with connected line points
const styles = {
  powerbiTraining: {
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    color: '#333',
  },
  trainingHero: {
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: 'white',
    padding: '80px 20px',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
  },
  heroTitle: {
    fontSize: '2.5rem',
    marginBottom: '20px',
    fontWeight: '700',
  },
  heroText: {
    fontSize: '1.2rem',
    marginBottom: '30px',
    opacity: '0.9',
  },
  ctaButton: {
    backgroundColor: '#FF9800',
    color: 'white',
    border: 'none',
    padding: '15px 30px',
    fontSize: '1.1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
  },
  dashboardPreview: {
    padding: '60px 20px',
    backgroundColor: '#f8fafc',
  },
  sectionTitle: {
    textAlign: 'center',
    marginBottom: '20px',
    color: '#2a5298',
    fontSize: '2rem',
    fontWeight: '600',
  },
  sectionSubtitle: {
    textAlign: 'center',
    marginBottom: '40px',
    color: '#666',
    fontSize: '1.1rem',
    maxWidth: '800px',
    margin: '0 auto',
  },
  professionalDashboard: {
    margin: '40px auto',
    maxWidth: '1000px',
    borderRadius: '12px',
    overflow: 'hidden',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
    marginBottom: '60px',
  },
  dashboardImage: {
    width: '100%',
    height: 'auto',
    display: 'block',
  },
  imageCaption: {
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#f1f5f9',
    color: '#64748b',
    fontStyle: 'italic',
  },
  dashboardContainer: {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.08)',
    overflow: 'hidden',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  dashboardHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '18px 25px',
    backgroundColor: '#2a5298',
    color: 'white',
  },
  headerItem: {
    fontWeight: '600',
    fontSize: '1.1rem',
  },
  dashboardContent: {
    padding: '25px',
  },
  kpiCards: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '20px',
    marginBottom: '35px',
  },
  kpiCard: {
    padding: '25px',
    borderRadius: '10px',
    color: 'white',
    textAlign: 'center',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  kpiTitle: {
    marginTop: '0',
    fontSize: '1rem',
    fontWeight: '500',
    marginBottom: '15px',
  },
  kpiValue: {
    fontSize: '2rem',
    fontWeight: '700',
    margin: '15px 0',
  },
  trendUp: {
    color: '#f1f8f1ff',
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  trendNeutral: {
    fontWeight: '600',
    fontSize: '0.9rem',
  },
  chartsRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '25px',
    marginBottom: '35px',
  },
  chartContainer: {
    padding: '25px',
    borderRadius: '10px',
    color: 'white',
    height: '320px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  },
  chartTitle: {
    marginTop: '0',
    marginBottom: '18px',
    fontSize: '1.1rem',
    fontWeight: '600',
  },
  chartPlaceholder: {
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    borderRadius: '8px',
    height: '80%',
    marginTop: '15px',
    position: 'relative',
    overflow: 'hidden',
  },
  
  // Enhanced Bar Graph Styles
  barGraphContainer: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  barWithLabel: {
    width: '20%',
    position: 'absolute',
    bottom: '0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '5px',
    borderTopLeftRadius: '5px',
    borderTopRightRadius: '5px',
    transition: 'height 0.3s ease',
  },
  barValue: {
    fontSize: '0.7rem',
    fontWeight: 'bold',
    marginBottom: '5px',
    color: 'black',
  },
  barLabel: {
    fontSize: '0.8rem',
    fontWeight: '600',
    color: 'black',
    marginBottom: '3px',
  },
  barPercentage: {
    fontSize: '0.7rem',
    color: 'black',
    opacity: '0.9',
  },
  
  // Enhanced Line Chart Styles with Connected Points
  lineChart: {
    position: 'relative',
    height: '100%',
    width: '100%',
  },
  trendLineSVG: {
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '100%',
    zIndex: '1',
  },
  dataPoint: {
    position: 'absolute',
    width: '14px',
    height: '14px',
    borderRadius: '50%',
    border: '2px solid #FFFFFF',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    zIndex: '2',
    boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
  },
  tooltip: {
    position: 'absolute',
    bottom: '25px',
    left: '50%',
    transform: 'translateX(-50%)',
    zIndex: '10',
  },
  tooltipContent: {
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    color: 'white',
    padding: '8px 12px',
    borderRadius: '4px',
    fontSize: '0.8rem',
    fontWeight: '600',
    whiteSpace: 'nowrap',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)',
  },
  tooltipArrow: {
    position: 'absolute',
    top: '100%',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '0',
    height: '0',
    borderLeft: '6px solid transparent',
    borderRight: '6px solid transparent',
    borderTop: '6px solid rgba(0, 0, 0, 0.8)',
  },
  
  // Enhanced Pie Chart Styles
  pieChart: {
    width: '200px',
    height: '200px',
    borderRadius: '50%',
    background: 'conic-gradient(#4A148C 0% 35%, #0cce46ff 35% 65%, #8daa24ff 65% 85%, #9C27B0 85% 100%)',
    margin: '10px 0 10px 10px',
    position: 'relative',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    float: 'left',
  },
  pieSlice1: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(50% 50%, 50% 0%, 100% 0%, 100% 50%)',
  },
  pieSlice2: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(50% 50%, 100% 50%, 100% 100%, 50% 100%)',
  },
  pieSlice3: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(50% 50%, 50% 100%, 0% 100%, 0% 50%)',
  },
  pieSlice4: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    clipPath: 'polygon(50% 50%, 0% 50%, 0% 0%, 50% 0%)',
  },
  
  // Enhanced Store Legend
  storeLegend: {
    position: 'absolute',
    right: '10px',
    top: '50%',
    transform: 'translateY(-50%)',
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    padding: '10px',
    borderRadius: '5px',
    left: '220px',
  },
  legendItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '8px',
    fontSize: '0.8rem',
  },
  legendColor: {
    width: '12px',
    height: '12px',
    borderRadius: '2px',
    marginRight: '8px',
    display: 'inline-block',
  },
  legendText: {
    color: 'white',
    fontWeight: '500',
  },
  
  topProducts: {
    padding: '15px',
  },
  productRow: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px 0',
    borderBottom: '1px solid rgba(255, 255, 255, 0.3)',
    fontSize: '0.95rem',
  },
  trainingDetails: {
    padding: '60px 20px',
    backgroundColor: 'white',
  },
  learningModules: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
    gap: '30px',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  module: {
    padding: '30px',
    borderRadius: '10px',
    backgroundColor: '#f8fafc',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.06)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  moduleTitle: {
    color: '#2a5298',
    marginTop: '0',
    fontSize: '1.2rem',
    fontWeight: '600',
    marginBottom: '15px',
  },
  moduleText: {
    color: '#666',
    lineHeight: '1.6',
  },
  enrollmentSection: {
    padding: '80px 20px',
    background: 'linear-gradient(135deg, #1e3c72 0%, #2a5298 100%)',
    color: 'white',
    textAlign: 'center',
  },
  enrollmentText: {
    marginBottom: '30px',
    fontSize: '1.1rem',
    maxWidth: '600px',
    margin: '0 auto 30px',
    opacity: '0.9',
  },
  enrollButton: {
    backgroundColor: '#FF9800',
    color: 'white',
    border: 'none',
    padding: '18px 45px',
    fontSize: '1.2rem',
    borderRadius: '8px',
    cursor: 'pointer',
    fontWeight: '600',
    transition: 'all 0.3s ease',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.15)',
  },
};

// Enhanced hover effects
const addHoverEffects = `
  .powerbi-training .cta-button:hover {
    background-color: #F57C00;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  .powerbi-training .enroll-button:hover {
    background-color: #F57C00;
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  .powerbi-training .module:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }
  
  .powerbi-training .kpi-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
  }
  
  /* Enhanced data point hover effects */
  .powerbi-training .data-point:hover {
    transform: translate(-50%, 50%) scale(1.3) !important;
    box-shadow: 0 4px 12px rgba(255, 215, 0, 0.6) !important;
    z-index: 20 !important;
  }
`;

// Inject hover styles
if (typeof document !== 'undefined') {
  const styleElement = document.createElement('style');
  styleElement.textContent = addHoverEffects;
  document.head.appendChild(styleElement);
}

export default TrainingPowerBI;