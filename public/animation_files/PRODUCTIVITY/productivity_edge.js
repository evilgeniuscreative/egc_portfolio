
(function($,Edge,compId){var _=null,y=true,n=false,e156='${_xFeb}',e105='${_introWorker3}',x229='35px',x243='25px',x297='15px',x208='rgb(0, 0, 0)',x281='65px',e157='${_aprCount}',e275='${_marme}',e115='${_whiteFadeout}',e116='${_chartBars}',e117='${_largeTeamsCompare}',e120='${_mayWorkgroup}',i='none',e79='${_marWorker}',x19='rgba(214,214,214,1.00)',e122='${_mal-9}',e194='${_introWorker1}',x108='rgba(51,51,51,1.00)',e130='${_pText7}',fs='font-size',e135='${_mal-3}',e87='${_smallTeams}',e136='${_indAvgLine}',e88='${_arrowWrap}',e158='${_janWork}',rz='rotateZ',e155='${_xMar}',c='color',x119='rgba(0,169,224,1)',e93='${_x-axis}',zx='scaleX',e144='${_indAvgLegendIconBox}',x200='216px',e148='${_teamChartLarge}',e152='${_fem-8}',e94='${_aprWorker}',x8='9',e159='${_pText1}',e163='${_aprWorkgroup}',e164='${_febBar}',o='opacity',e172='${_p50}',e182='${_junBar}',x227='industry-average',x210='225px',e186='${_theGraph}',e175='${_xJun}',qok='easeOutBack',x209='150px',e101='${_rallyBar}',e195='${_productivityTitle}',e150='${_big-arrow}',e104='${_xMay}',e181='${_marWork}',x217='209px',x289='57',x255='69px',x250='59px',e113='${_junWorkgroup}',x204='doubleArrow',s='style',e118='${_aprBar}',x240='janmo',e121='${_mayWorkProduct}',lf='left',x2='notosans_bold, Helvetica, sans-serif',x286='youArrow',e226='${_chairman}',x202='auto',e133='${_junCount}',x273='rgba(68,68,68,1)',tp='top',e86='${_y-axis}',x61='16',ov='overflow',x102='rgba(141,198,63,1)',t='transform',e138='${_scorecard}',x40='rgba(0,0,0,0)',e141='${_youdabest}',r='deg',e173='${_percentile-arrow2}',e153='${_p75}',x='text',m='rect',e278='${_marmo}',h='height',e162='${_trend-arrowhead}',x35='11',e170='${_fem-4}',e274='${_largeChart}',rt='right',x43='80',x76='rgba(102,102,102,1.00)',e179='${_marWorkgroup}',e206='${_double-arrow}',l='normal',e168='${_janWorkgroup}',x222='176px',e107='${_pText4}',x244='12px',e272='${_teamZ}',e112='${_xJan}',x166='rgba(102,102,102,1)',x231='indAvgLine',x257='febme',x6='horizontal',x201='144px',x211='rgba(202,221,163,1)',e123='${_marBar}',e125='${_teamChartSmall}',e126='${_s10}',e131='${_s2}',e132='${_s8}',e191='${_s6}',x80='rgba(255,255,255,1)',e100='${_line100}',e97='${_zeroPointZero}',e142='${_introWorker4}',e143='${_whatIsThisTitle}',x282='63px',e146='${_pText3}',e147='${_workspace-average}',x251='30px',e151='${_mayCount}',qoq='easeOutQuad',e300='${_big-arrow-orange}',x37='32',qik='easeInBack',x298='22px',x295='youText',x293='57px',x3='3.0.0',e91='${_febWorker}',x291='big-arrow-orange',x290='180',x245='febmo',p='px',x288='-468px',e184='${_xApr}',x216='131px',x242='92px',e190='${_s4}',e205='${symbolSelector}',x1='notosans_regular, Helvetica, sans-serif',x74='rgba(0,169,224,1.00)',x280='80px',x259='23px',e219='${_workMedium}',e279='${_janme}',e277='${_febme}',x235='133px',e276='${_janmo}',e188='${_mal-8}',x271='rgba(85,85,85,1)',ql='linear',e270='${_febmo}',x269='teamChartLarge',x268='20px',x267='124px',e103='${_pointer-cursor}',e299='${_youText}',x75='stage',x263='teamZ',e90='${_line25}',x239='rgba(85,85,85,1.00)',e106='${_junWork}',x261='marme',e77='${_trend-arrow}',e174='${_legendPercentile}',e109='${_p100}',x258='91px',x260='67px',e110='${_fem-3}',e111='${_indAvgLegendIcon}',x254='51px',x221='chairman',x253='janme',a='Base State',x252='31px',e114='${_pText6}',x249='11px',x82='hidden',x248='94px',x247='marmo',x68='rgba(255,255,255,1.00)',e180='${_youArrow}',x241='14px',x238='largeChart',x237='solid',x236='107px',xc='rgba(0,0,0,1)',e196='${_doubleArrowRight}',e232='${_industry-average}',x228='500px',x225='aWorker',e124='${_pText2}',x223='330px',e127='${_teamSizes}',x292='50px',e128='${_theTrend}',bg='background-color',e129='${_xMonths}',x256='21px',e85='${_line75}',e220='${_workText}',x218='workProduct',x285='teamChartSmall',e134='${_pText5}',x215='8px',x214='10px',x9='400',x212='workText',e99='${_junWorker}',e89='${_aprCountCopy2}',zy='scaleY',e177='${_marCount}',e171='${_febCount}',e84='${_janWorker}',e140='${_p25}',x207='workMedium',x283='27px',g='image',po='center',e145='${_compareTo}',e137='${_janBar}',e161='${_legendStories}',e193='${_percentileGroup}',ta='text-align',x198='double-arrow',e95='${_line50}',e197='${_fem-7}',x233='2px',x234='1px',x265='4px',x266='3px',e81='${_Stage}',x199='0px',e160='${_smallTeamsCompare}',x5='both',e192='${_replay}',e189='${_janCount}',e167='${_mal-4}',e187='${_introWorker2}',e185='${_febWork}',x287='group',dt='Default Timeline',e96='${_junCountCopy}',x262='rgba(68,68,68,1.00)',e176='${_doubleArrowLeft}',x246='54px',e178='${_aprWork}',x29='rgba(141,198,63,1.00)',e169='${_mayBar}',e183='${_febWorkgroup}',e165='${_p0}',x4='3.0.0.322',e92='${_largeTeams}',e98='${_mayWorker}',x20='rgba(230,230,230,1.00)',w='width',e154='${_ninetyNineNine}',e149='${_fem-2}',e83='${_notsogood}',e78='${_whatIsThisTitleCopy}',e139='${_throughputTitle}',ff='font-family';var im='images/';var g51='fem-7.svg',g203='double-arrow.svg',g56='mal-9.svg',g71='pointer-cursor.svg',g41='percentile-arrow.svg',g54='fem-4.svg',g49='fem-8.svg',g53='fem-3.svg',g50='mal-3.svg',g55='mal-4.svg',g69='scorecard.png',g294='big-arrow2.svg',g72='replay.svg',g48='fem-2.svg',g230='industry-average.svg',g224='chairman.svg',g47='trend-arrowhead.svg',g70='big-arrow.svg',g46='trend-arrow.svg',g52='mal-8.svg';var s45="What is this?",s21="Percentile Ranking Across Industry",s7="0",s16="6",s17="8",s67="And finally, you can customize how all of this is calculated, weighted, or displayed, in the Insights Scorecards section.",s66="The Workspace Average line shows how you compare to other teams in your own workspace.",s62="This percentile score allows your team to compare its performance to other teams in your company and the industry as a whole, thanks to the thousands of teams that use Rally.",s30="7 stories",s31="6 stories",s32="5 stories",s28="JAN",s57="LARGE TEAMS",s11="50",s296="YOU",s27="FEB",s18="10",s23="JUN",s64="By default, Throughput is normalized for team size, so you can compare small teams to large teams.",s25="APR",s12="75",s60="The Produtivity score shows a ranking of the amount of work your team completes over months or quarters. Higher is better.",s34="WORKSPACE AVERAGE",s10="25",s26="MAR",s42="Productivity",s33="noverflow",s284="Team A",s264="Team Z",s36="NOT SO GOOD",s73="hover-pointer",s59="COMPARE TO",s24="MAY",s63="The Productivity score is based on Throughput, which by default uses the count of user stories completed in a given month.",s213="There is a vitality, a life force, an energy, a quickening that is translated through you into action, and because there is only one of you in all of time, this expression is unique. And if you block it, it will never exist through any other medium and it will be lost. The world will not have it. It is not your business to determine how good it is nor how valuable nor how it compares with other expressions. It is your business to keep it yours clearly and directly, to keep the channel open.",s44="Throughput",s65="This Throughput score is percentile ranked against the overall industry's  scores to calculate your Productivity score.",s39="99.999999999999",s14="2",s15="4",s38="YOU'RE THE BEST",s58="SMALL TEAMS",s13="100",s22="Stories per Team Member";var fonts={};fonts[x1]='<link rel=\"stylesheet\" href=\"webfonts/notosansReg.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\">';fonts[x2]='<link rel=\"stylesheet\" href=\"webfonts/notosansBold.css\" type=\"text/css\" media=\"screen\" title=\"\" charset=\"utf-8\">';var P=Edge.P,T=Edge.T,A=Edge.A;var opts={};var resources=[];var symbols={"stage":{v:x3,mv:x3,b:x4,bS:a,stf:x5,cg:x6,iS:a,gpu:n,rI:n,cn:{dom:[{id:'theGraph',t:'group',r:['36px','149','450','219','auto','auto'],c:[{id:'p0',t:x,r:['-31px','209px','24px','11px','auto','auto'],text:s7,align:"right",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'p25',t:x,r:['-31px','159px','24px','11px','auto','auto'],text:s10,align:"right",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'p50',t:x,r:['-31px','103px','24px','11px','auto','auto'],text:s11,align:"right",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'p75',t:x,r:['-31px','46px','24px','11px','auto','auto'],text:s12,align:"right",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'p100',t:x,r:['-31px','-4px','24px','11px','auto','auto'],text:s13,align:"right",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'s2',t:x,r:['-31px','159px','24px','11px','auto','auto'],text:s14,align:"right",n:[x2,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'s4',t:x,r:['-31px','159px','24px','11px','auto','auto'],text:s15,align:"right",n:[x2,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'s6',t:x,r:['-31px','103px','24px','11px','auto','auto'],text:s16,align:"right",n:[x2,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'s8',t:x,r:['-31px','46px','24px','11px','auto','auto'],text:s17,align:"right",n:[x2,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'s10',t:x,r:['-31px','-4px','24px','11px','auto','auto'],text:s18,align:"right",n:[x2,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'y-axis',t:m,r:['0px','1px','1px','217px','auto','auto'],f:[x19],s:[0,"rgb(0, 0, 0)",i]},{id:'x-axis',t:m,r:['0px','217px','475px','1px','auto','auto'],f:[x19],s:[0,"rgb(0, 0, 0)",i]},{id:'line25',t:m,r:['0px','164px','475px','1px','auto','auto'],f:[x20],s:[0,"rgb(0, 0, 0)",i]},{id:'line50',t:m,r:['0px','109px','475px','1px','auto','auto'],f:[x20],s:[0,"rgb(0, 0, 0)",i]},{id:'line75',t:m,r:['0px','55px','475px','1px','auto','auto'],f:[x20],s:[0,"rgb(0, 0, 0)",i]},{id:'line100',t:m,r:['0px','0px','475px','1px','auto','auto'],f:[x20],s:[0,"rgb(0, 0, 0)",i]},{id:'legendPercentile',t:x,r:['-117px','95px','182px','14px','auto','auto'],text:s21,align:"center",n:[x2,s17,xc,x9,i,l],tf:[[],['-90']]},{id:'legendStories',t:x,r:['-117px','95px','182px','14px','auto','auto'],text:s22,align:"center",n:[x2,s17,xc,x9,i,l],tf:[[],['-90']]}]},{id:'xMonths',t:'group',r:['68','373','414','11','auto','auto'],c:[{id:'xJun',t:x,r:['390px','0px','24px','11px','auto','auto'],text:s23,align:"center",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'xMay',t:x,r:['312px','0px','24px','11px','auto','auto'],text:s24,align:"center",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'xApr',t:x,r:['234px','0px','24px','11px','auto','auto'],text:s25,align:"center",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'xMar',t:x,r:['156px','0px','24px','11px','auto','auto'],text:s26,align:"center",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'xFeb',t:x,r:['78px','0px','24px','11px','auto','auto'],text:s27,align:"center",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]},{id:'xJan',t:x,r:['0px','0px','24px','11px','auto','auto'],text:s28,align:"center",n:[x1,x8,"rgba(102,102,102,1.00)",x9,i,l]}]},{id:'janWorkgroup',t:'group',r:['37','121','85','251','auto','auto'],c:[{id:'janWork',t:m,r:['42px','125px','auto','auto','auto','auto']},{id:'janWorker',t:m,r:['-45px','5px','auto','auto','auto','auto'],tf:[[],[],[],['0.48606','0.48606']]}]},{id:'febWorkgroup',t:'group',r:['115px','121','85','251','auto','auto'],c:[{id:'febWork',t:m,r:['42px','125px','auto','auto','auto','auto']},{id:'febWorker',t:m,r:['-45px','5px','auto','auto','auto','auto'],tf:[[],[],[],['0.48606','0.48606']]}]},{id:'marWorkgroup',t:'group',r:['193px','121','85','251','auto','auto'],c:[{id:'marWork',t:m,r:['42px','125px','auto','auto','auto','auto']},{id:'marWorker',t:m,r:['-45px','5px','auto','auto','auto','auto'],tf:[[],[],[],['0.48606','0.48606']]}]},{id:'aprWorkgroup',t:'group',r:['271px','121','85','251','auto','auto'],c:[{id:'aprWork',t:m,r:['42px','125px','auto','auto','auto','auto']},{id:'aprWorker',t:m,r:['-45px','5px','auto','auto','auto','auto'],tf:[[],[],[],['0.48606','0.48606']]}]},{id:'mayWorkgroup',t:'group',r:['349px','121','85','251','auto','auto'],c:[{id:'mayWorkProduct',t:m,r:['42px','125px','auto','auto','auto','auto']},{id:'mayWorker',t:m,r:['-45px','5px','auto','auto','auto','auto'],tf:[[],[],[],['0.48606','0.48606']]}]},{id:'junWorkgroup',t:'group',r:['427px','121','85','251','auto','auto'],c:[{id:'junWork',t:m,r:['42px','125px','auto','auto','auto','auto']},{id:'junWorker',t:m,r:['-45px','5px','auto','auto','auto','auto'],tf:[[],[],[],['0.48606','0.48606']]}]},{id:'chartBars',t:'group',r:['54px','169','50','198','auto','auto'],c:[{id:'janBar',t:m,r:['0px','0px','50px','198px','auto','auto'],o:1,f:[x29],s:[0,"rgb(0, 0, 0)",i]},{id:'febBar',t:m,r:['78px','21px','50px','177px','auto','auto'],o:1,f:[x29],s:[0,"rgb(0, 0, 0)",i]},{id:'marBar',t:m,r:['156px','34px','50px','164px','auto','auto'],o:1,f:[x29],s:[0,"rgb(0, 0, 0)",i]},{id:'aprBar',t:m,r:['234px','37px','50px','161px','auto','auto'],o:1,f:[x29],s:[0,"rgb(0, 0, 0)",i]},{id:'mayBar',t:m,r:['312px','22px','50px','176px','auto','auto'],o:1,f:[x29],s:[0,"rgb(0, 0, 0)",i]},{id:'junBar',t:m,r:['390px','3px','50px','195px','auto','auto'],o:1,f:[x29],s:[0,"rgb(0, 0, 0)",i]},{id:'janCount',t:x,r:['0px','41px','50px','15px','auto','auto'],text:s30,align:"center",n:[x1,x8,"rgba(102,102,102,1)",x9,i,l]},{id:'febCount',t:x,r:['78px','56px','50px','15px','auto','auto'],text:s31,align:"center",n:[x1,x8,"rgba(102,102,102,1)",x9,i,l]},{id:'marCount',t:x,r:['156px','66px','50px','15px','auto','auto'],text:s32,align:"center",n:[x1,x8,"rgba(102,102,102,1)",x9,i,l]},{id:'aprCount',t:x,r:['234px','67px','50px','15px','auto','auto'],text:s32,align:"center",n:[x1,x8,"rgba(102,102,102,1)",x9,i,l]},{id:'mayCount',t:x,r:['312px','57px','50px','15px','auto','auto'],text:s31,align:"center",n:[x1,x8,"rgba(102,102,102,1)",x9,i,l]},{id:'junCount',t:x,r:['390px','43px','50px','15px','auto','auto'],text:s30,align:"center",n:[x1,x8,"rgba(102,102,102,1)",x9,i,l]},{id:'indAvgLine',t:m,r:['-23','-253','auto','auto','auto','auto']},{id:'indAvgLegendIconBox',t:'group',r:['280px','-23px','30px','20px','auto','auto'],userClass:s33,c:[{id:'indAvgLegendIcon',t:m,r:['0px','0px','auto','auto','auto','auto']}]},{id:'workspace-average',t:x,r:['212px','68px','130px','20px','auto','auto'],text:s34,align:"center",n:[x2,x35,"rgba(51,51,51,1.00)",x9,i,l]}]},{id:'percentileGroup',t:'group',r:['60','82','375','39','auto','auto'],c:[{id:'notsogood',t:x,r:['-22px','39px','65px','14px','auto','auto'],text:s36,align:"center",n:[x2,s17,xc,x9,i,l]},{id:'zeroPointZero',t:x,r:['0px','0px','25px','39px','auto','auto'],text:s7,align:"left",n:[x2,x37,xc,x9,i,l]},{id:'youdabest',t:x,r:['348px','39px','77px','14px','auto','auto'],text:s38,align:"center",n:[x2,s17,xc,x9,i,l]},{id:'ninetyNineNine',t:x,r:['350px','0px','215px','39px','auto','auto'],text:s39,align:"left",n:[x2,x37,xc,x9,i,l]},{id:'arrowWrap',t:'group',r:['26px','-14','444px','71','auto','auto'],userClass:s33,c:[{id:'percentile-arrow2',t:g,r:['-341px','12px','667px','49px','auto','auto'],f:[x40,im+g41,'0px','0px']}]}]},{id:'introWorker1',t:m,r:['238','210','auto','auto','auto','auto']},{id:'introWorker2',t:m,r:['238','210','auto','auto','auto','auto']},{id:'introWorker3',t:m,r:['238','210','auto','auto','auto','auto']},{id:'introWorker4',t:m,r:['238','210','auto','auto','auto','auto']},{id:'productivityTitle',t:x,r:['25px','39px','426px','127px','auto','auto'],text:s42,align:"left",n:[x2,x43,"rgba(141,198,63,1.00)",x9,i,l]},{id:'throughputTitle',t:x,r:['25px','39px','426px','127px','auto','auto'],text:s44,align:"left",n:[x2,x43,"rgba(141,198,63,1.00)",x9,i,l]},{id:'whatIsThisTitle',t:x,r:['33px','19px','242px','42px','auto','auto'],o:1,text:s45,n:[x2,x37,xc,l,i,""]},{id:'theTrend',t:'group',r:['60','125','471','252','auto','auto'],o:1,userClass:s33,c:[{id:'trend-arrow',t:g,r:['0px','0px','471px','252px','auto','auto'],f:[x40,im+g46,'0px','0px']},{id:'trend-arrowhead',t:g,r:['409px','17px','56px','64px','auto','auto'],f:[x40,im+g47,'0px','0px'],tf:[[],['-34']]}]},{id:'teamSizes',t:'group',r:['52px','174px','400','200','auto','auto'],c:[{id:'largeTeams',t:'group',r:['199px','-38px','259px','246px','auto','auto'],c:[{id:'fem-2',t:g,r:['167px','6px','71px','200px','auto','auto'],o:1,f:[x40,im+g48,'0px','0px'],tf:[[],[],[],['0','0']]},{id:'fem-8',t:g,r:['98px','16px','71px','200px','auto','auto'],o:1,f:[x40,im+g49,'0px','0px'],tf:[[],[],[],['0','0']]},{id:'mal-3',t:g,r:['65px','46px','71px','200px','auto','auto'],o:1,f:[x40,im+g50,'0px','0px'],tf:[[],[],[],['0','0']]},{id:'fem-7',t:g,r:['27px','36px','71px','200px','auto','auto'],o:1,f:[x40,im+g51,'0px','0px'],tf:[[],[],[],['0','0']]},{id:'mal-8',t:g,r:['193px','16px','71px','200px','auto','auto'],o:1,f:[x40,im+g52,'0px','0px'],tf:[[],[],[],['0','0']]},{id:'fem-3',t:g,r:['143px','46px','71px','200px','auto','auto'],o:1,f:[x40,im+g53,'0px','0px'],tf:[[],[],[],['0','0']]}]},{id:'smallTeams',t:'group',r:['0','-18px','169px','225px','auto','auto'],c:[{id:'fem-4',t:g,r:['0px','11px','71px','200px','auto','auto'],f:[x40,im+g54,'0px','0px']},{id:'mal-4',t:g,r:['82px','0px','71px','200px','auto','auto'],f:[x40,im+g55,'0px','0px']},{id:'mal-9',t:g,r:['42px','20px','71px','200px','auto','auto'],f:[x40,im+g56,'0px','0px']}]},{id:'largeTeamsCompare',t:x,r:['342px','-57px','85px','16px','auto','auto'],text:s57,align:"center",n:[x2,s18,xc,x9,i,l]},{id:'smallTeamsCompare',t:x,r:['-13px','-57px','85px','16px','auto','auto'],text:s58,align:"center",n:[x2,s18,xc,x9,i,l]},{id:'compareTo',t:x,r:['175px','-57px','85px','16px','auto','auto'],text:s59,align:"center",n:[x2,s18,xc,x9,i,l]},{id:'doubleArrowLeft',t:m,r:['17px','-121px','auto','auto','auto','auto'],tf:[[],[],[],['0.30556','0.30556']]},{id:'doubleArrowRight',t:m,r:['30px','-121px','auto','auto','auto','auto'],tf:[[],[],[],['0.30556','0.30556']]},{id:'teamChartSmall',t:m,r:['20','73','auto','auto','auto','auto']},{id:'teamChartLarge',t:m,r:['350','107','auto','auto','auto','auto']}]},{id:'pText1',t:x,r:['32px','60px','488px','101px','auto','auto'],text:s60,align:"left",n:[x1,x61,xc,x9,i,l]},{id:'pText2',t:x,r:['32px','60px','488px','101px','auto','auto'],text:s62,align:"left",n:[x1,x61,xc,x9,i,l]},{id:'pText3',t:x,r:['32px','60px','488px','101px','auto','auto'],text:s63,align:"left",n:[x1,x61,xc,x9,i,l]},{id:'pText4',t:x,r:['32px','60px','488px','101px','auto','auto'],text:s64,align:"left",n:[x1,x61,xc,x9,i,l]},{id:'pText5',t:x,r:['32px','60px','488px','101px','auto','auto'],text:s65,align:"left",n:[x1,x61,xc,x9,i,l]},{id:'pText6',t:x,r:['32px','60px','488px','101px','auto','auto'],text:s66,align:"left",n:[x1,x61,xc,x9,i,l]},{id:'pText7',t:x,r:['32px','60px','488px','101px','auto','auto'],text:s67,align:"left",n:[x1,x61,xc,x9,i,l]},{id:'whiteFadeout',t:m,r:['0px','21px','551px','376px','auto','auto'],o:0.90243902439024,f:[x68],s:[0,"rgb(0, 0, 0)",i]},{id:'scorecard',t:g,r:['402px','17px','137px','37px','auto','auto'],f:[x40,im+g69,'0px','0px']},{id:'big-arrow',t:g,r:['362px','10px','42px','48px','auto','auto'],f:[x40,im+g70,'0px','0px']},{id:'pointer-cursor',t:g,r:['338px','301px','168px','194px','auto','auto'],f:[x40,im+g71,'0px','0px']},{id:'replay',t:g,r:['117px','64px','300px','291px','auto','auto'],f:[x40,im+g72,'0px','0px'],userClass:s73},{id:'rallyBar',t:m,r:['0px','0px','551px','6px','auto','auto'],f:[x74],s:[0,"rgb(0, 0, 0)",i]},{id:'youArrow',t:m,r:['594','169','auto','auto','auto','auto']}],sI:[{id:'aprWorker',sN:'aWorker',a:{}},{id:'mayWorker',sN:'aWorker',a:{}},{id:'introWorker4',sN:'aWorker',a:{}},{id:'janWork',sN:'workProduct',a:{}},{id:'indAvgLegendIcon',sN:'indAvgLine',a:{}},{id:'youArrow',sN:'youArrow',a:{}},{id:'teamChartLarge',sN:'teamChartLarge',a:{}},{id:'introWorker3',sN:'aWorker',a:{}},{id:'aprWork',sN:'workProduct',a:{}},{id:'mayWorkProduct',sN:'workProduct',a:{}},{id:'febWork',sN:'workProduct',a:{}},{id:'doubleArrowLeft',sN:'doubleArrow',a:{}},{id:'junWorker',sN:'aWorker',a:{}},{id:'teamChartSmall',sN:'teamChartSmall',a:{}},{id:'junWork',sN:'workProduct',a:{}},{id:'introWorker1',sN:'aWorker',a:{}},{id:'janWorker',sN:'aWorker',a:{}},{id:'marWorker',sN:'aWorker',a:{}},{id:'febWorker',sN:'aWorker',a:{}},{id:'introWorker2',sN:'aWorker',a:{}},{id:'indAvgLine',sN:'indAvgLine',a:{}},{id:'marWork',sN:'workProduct',a:{}},{id:'doubleArrowRight',sN:'doubleArrow',a:{}}]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:125000,a:y,tt:[{id:"eid1096",tr:[function(e,d){this.eSA(e,d);},['play','${_youArrow}',[]],""],p:73000}]}}},"doubleArrow":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x198,t:g,r:[x199,x199,x200,x201,x202,x202],f:[x40,im+g203,x199,x199]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"workProduct":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:m,id:x207,s:[0,x208,i],r:[x199,x199,x209,x210,x202,x202],f:[x211]},{n:[x1,9,x166,x9,i,l],t:x,id:x212,text:s213,align:lf,r:[x214,x215,x216,x217,x202,x202]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"aWorker":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x221,t:g,r:[s7,x199,x222,x223,x202,x202],f:[x40,im+g224,x199,x199]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"indAvgLine":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{t:g,id:x227,o:1,r:[x199,x199,x228,x229,x202,x202],f:[x40,im+g230,x199,x199]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"teamChartLarge":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x233,x234,x235,x236,x202,x202],s:[1,xc,x237],id:x238,o:1,t:m,f:[x68],c:[{n:[x2,6,x239,x9,i,l],t:x,id:x240,text:s28,align:po,r:[x241,x242,x243,x244,x202,x202]},{n:[x2,6,x239,x9,i,l],t:x,id:x245,text:s27,align:po,r:[x246,x242,x243,x244,x202,x202]},{n:[x2,6,x239,x9,i,l],t:x,id:x247,text:s26,align:po,r:[x248,x242,x243,x244,x202,x202]},{r:[x249,x250,x251,x252,x202,x202],id:x253,s:[1,x208,i],t:m,f:[x74]},{r:[x254,x255,x251,x256,x202,x202],id:x257,s:[1,x208,i],t:m,f:[x74]},{r:[x258,x259,x251,x260,x202,x202],id:x261,s:[1,x208,i],t:m,f:[x74]},{n:[x2,12,x262,x9,i,l],t:x,id:x263,text:s264,align:lf,r:[x265,x266,x267,x268,x202,x202]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"teamChartSmall":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{r:[x233,x234,x235,x236,x202,x202],s:[1,xc,x237],id:x238,o:1,t:m,f:[x68],c:[{n:[x2,6,x239,x9,i,l],t:x,id:x240,text:s28,align:po,r:[x241,x242,x243,x244,x202,x202]},{n:[x2,6,x239,x9,i,l],t:x,id:x245,text:s27,align:po,r:[x246,x242,x243,x244,x202,x202]},{n:[x2,6,x239,x9,i,l],t:x,id:x247,text:s26,align:po,r:[x248,x242,x243,x244,x202,x202]},{r:[x249,x280,x251,x214,x202,x202],id:x253,s:[1,x208,i],t:m,f:[x74]},{r:[x254,x243,x251,x281,x202,x202],id:x257,s:[1,x208,i],t:m,f:[x74]},{r:[x258,x282,x251,x283,x202,x202],id:x261,s:[1,x208,i],t:m,f:[x74]},{n:[x2,12,x262,x9,i,l],t:x,id:x263,text:s284,align:lf,r:[x265,x266,x267,x268,x202,x202]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:0,a:n,tt:[]}}},"youArrow":{v:x3,mv:x3,b:x4,bS:a,stf:i,cg:i,iS:a,gpu:n,rI:n,cn:{dom:[{id:x286,t:x287,r:[x288,x199,s11,x289,x202,x202],c:[{tf:[[0,0],[x290]],id:x291,t:g,r:[x199,x199,x292,x293,x202,x202],f:[x40,im+g294,x199,x199]},{n:[x2,11,x68,x9,i,l],t:x,id:x295,text:s296,align:po,r:[x297,x298,x283,x241,x202,x202]}]}],sI:[]},s:{},tl:{"Default Timeline":{fS:a,tS:"",d:12000,a:n,tt:[]}}}};var S1=symbols[x75];var tl0=S1.tl[dt].tt,st1=S1.s[a]={},A1=A(_,tl0,st1);A1.A(e77).P(h,252).P(tp,0).P(lf,0).P(w,471);A1.A(e78).P(tp,9).P(fs,32).P(ff,x2).P(h,42).P(o,0,_,_,"").P(lf,33,_,_,p).P(w,242);A1.A(e79).P(tp,5).P(zx,0.48606,t,_,"").P(zy,0.48606,t).P(lf,-45,_,_,p);A1.A(e81).P(bg,x80,c).P(ov,x82).P(h,400).P(w,550);A1.A(e83).P(tp,39).P(ta,po).P(w,65).P(lf,-22).P(fs,8);A1.A(e84).P(zx,0.48606,t,_,"").P(tp,5,_,_,p).P(lf,-45).P(zy,0.48606,t,_,"");A1.A(e85).P(tp,55).P(h,1).P(bg,x20,c).P(lf,0).P(w,475);A1.A(e86).P(tp,1).P(h,217).P(bg,x19,c).P(lf,0).P(w,1);A1.A(e87).P(h,225).P(tp,-18).P(lf,0).P(w,169);A1.A(e88).P(lf,26).P(w,444);A1.A(e89).P(h,15).P(tp,67).P(lf,234).P(w,50);A1.A(e90).P(tp,164).P(h,1).P(bg,x20,c).P(lf,0).P(w,475);A1.A(e91).P(tp,5).P(zy,0.48606,t,_,"").P(lf,-45,_,_,p).P(zx,0.48606,t,_,"");A1.A(e92).P(tp,-38).P(h,246).P(lf,199).P(w,259);A1.A(e93).P(tp,217).P(h,1).P(bg,x19,c).P(lf,0).P(w,475);A1.A(e94).P(zx,0.48606,t,_,"").P(lf,-45,_,_,p).P(zy,0.48606,t,_,"").P(tp,5,_,_,p);A1.A(e95).P(tp,109).P(h,1).P(bg,x20,c).P(lf,0).P(w,475);A1.A(e96).P(h,15).P(tp,41).P(lf,387).P(w,50);A1.A(e97).P(lf,0).P(tp,0);A1.A(e98).P(zx,0.48606,t,_,"").P(tp,5,_,_,p).P(lf,-45).P(zy,0.48606,t,_,"");A1.A(e99).P(tp,5).P(zy,0.48606,t,_,"").P(lf,-45,_,_,p).P(zx,0.48606,t,_,"");A1.A(e100).P(tp,0).P(h,1).P(bg,x20,c).P(lf,0).P(w,475);A1.A(e101).P(bg,x74,c);A1.A(e103).P(tp,301).T(107.5,210,0.5,ql).P(o,0,_,_,"").T(107.5,1,0.5).T(112,0,1,qok).P(lf,344,_,_,p).T(107.5,344);A1.A(e104).P(tp,0).P(ta,po).P(c,x76,c).P(lf,312).P(fs,9).P(o,0,_,_,"").T(13,1,0.5,qoq);A1.A(e105).P(tp,80).T(0,105).P(zy,0.65714,t,_,"").T(0,0.66,_,_,0.66).P(zx,0.65714,t).T(0,0.66,_,_,0.66).T(7,0.66).P(o,1).T(6,0,1,ql).P(lf,565,_,_,p).T(2,251,0.5,qoq).T(7.5,-2530);A1.A(e106).P(zy,0.33333,t,_,"").P(lf,-33,_,_,p).P(zx,0.33333,t,_,"").P(tp,25,_,_,p).T(13.5,-25,1,qoq);A1.A(e107).P(ff,x1).P(fs,16).P(tp,58).T(55,58).P(c,x108,c).T(0,x108).P(lf,572).T(55,32,0.5,qoq).T(68.75,-515,0.5,ql).P(h,90).T(55,90);A1.A(e109).P(tp,-4).P(fs,9).P(ta,rt).P(h,11).P(c,x76,c).P(lf,-31).P(w,24).P(o,1,_,_,"").T(44,0,0.5,qoq).T(71,1,0.5);A1.A(e110).P(tp,46).P(h,200).P(o,1,_,_,"").P(lf,143,_,_,p).P(w,71).P(zy,0,t,_,"").T(59.25,1,0.3,qok).P(zx,0,t).T(59.25,1,0.3);A1.A(e111).P(tp,-320).T(85.003,-9).P(lf,-269).T(85.003,-269);A1.A(e112).P(tp,0).P(ta,po).P(c,x76,c).P(lf,0).P(fs,9).P(o,0,_,_,"").T(9,1,0.5,ql);A1.A(e113).P(lf,560).T(13.5,427,0.5,qoq).P(o,1,_,_,"").T(0,1).T(25.25,0,0.5,ql);A1.A(e114).P(ff,x1).P(fs,16).P(h,90).T(86,90).P(tp,58).T(86,58).P(lf,572).T(86,32,0.5,qoq).T(95,-515,0.5,ql).P(c,x108,c).T(0,x108);A1.A(e115).P(bg,x68,c).P(tp,139).T(105.483,139).T(123,8).P(o,0,_,_,"").T(104.623,0).T(105.483,0.9,0.574,ql).T(112,0,1,qok).T(123.5,0.9,1.5).P(lf,-1500,_,_,p).T(0,-1500).T(105.483,0).P(h,258).T(105.483,258).T(123,389);A1.A(e116).P(lf,54).P(o,1,_,_,"").T(56.5,0,0.5,ql).T(68.5,1,0.5);A1.A(e117).P(ta,po).P(w,100).P(o,1,_,_,"").P(ff,x2).P(fs,11,_,_,p).P(tp,-47).T(44.25,-47).P(lf,518).T(59.75,358,0.5,qok);A1.A(e118).P(lf,234).P(w,50).P(h,161).T(44,115,1,qoq).T(71.25,161,1).P(o,0,_,_,"").T(24.5,1,0.25,ql).P(bg,x102,c).T(44,x74,1,qoq).T(71.25,x29,1,_,x119).P(tp,37,_,_,p).T(44,83,1).T(71.25,37,1);A1.A(e120).P(lf,560).T(12.5,349,0.5,qoq).P(o,1,_,_,"").T(0,1).T(25,0,0.5,ql);A1.A(e121).P(zx,0.33333,t,_,"").P(lf,-33,_,_,p).P(zy,0.33333,t,_,"").P(tp,25,_,_,p).T(12.5,-5,1,qoq);A1.A(e122).P(tp,20).P(h,200).P(o,1,_,_,"").P(lf,42,_,_,p).P(w,71).P(zx,0,t,_,"").T(57,1,0.25,qok).P(zy,0,t).T(57,1,0.25);A1.A(e123).P(lf,156).P(w,50).P(tp,34).T(44,81,1,qoq).T(71.25,34,1).P(o,0,_,_,"").T(24.25,1,0.25,ql).P(bg,x102,c).T(44,x74,1,qoq).T(71.25,x29,1,_,x119).P(h,164,_,_,p).T(44,117,1).T(71.25,164,1);A1.A(e124).P(ff,x1).P(fs,16).P(tp,58).T(27.75,58).P(c,x108,c).T(0,x108).P(lf,572).T(27.75,32,0.5,qoq).T(43.25,-515,0.5,ql).P(h,90).T(27.75,90);A1.A(e125).P(lf,-212).T(57.5,28,0.278,qoq).P(tp,77).T(53.98,77);A1.A(e126).P(lf,-31).P(fs,9).P(tp,-4).P(ta,rt).P(h,11).P(ff,x2).P(w,24).P(c,x74,c).T(44,x74).P(o,0,_,_,"").T(44,1,0.5,qoq).T(71,0,0.5);A1.A(e127).P(tp,179).T(53.98,179).P(o,1,_,_,"").T(68.75,0,0.5,qok).P(lf,-3000,_,_,p).T(0,-3000).T(53.98,52).T(68.75,-488,0.5);A1.A(e128).P(tp,95).T(0,95).P(zx,1,t,_,"").T(7,1).P(h,0,_,_,p).T(0,255).P(o,0,_,_,"").T(0,0).T(2.75,1).T(6,0,1,ql).P(lf,30,_,_,p).T(0,30).T(7.5,-2500).P(w,0).T(2.75,471,1.25);A1.A(e129).P(o,1,_,_,"").T(56.5,0,0.5,ql).T(68.5,1,0.5);A1.A(e130).P(ff,x1).P(fs,16).P(c,x108,c).T(0,x108).P(h,90).T(95,90).P(lf,572).T(95,32,0.5,qoq).P(tp,58).T(95,58);A1.A(e131).P(ta,rt).P(ff,x2).P(lf,-31).P(fs,9).P(c,x74,c).T(44,x74).P(o,0,_,_,"").T(44,1,0.5,qoq).T(71,0,0.5).P(tp,166,_,_,p).T(44,166);A1.A(e132).P(ta,rt).P(ff,x2).P(lf,-31).P(fs,9).P(tp,39).T(44,39).P(o,0,_,_,"").T(44,1,0.5,qoq).T(71,0,0.5).P(c,x74,c).T(44,x74);A1.A(e133).P(tp,43).P(h,15).P(w,50).P(lf,-2304).T(0,-2304).T(44,390).P(o,0,_,_,"").T(44.75,1,0.5,qoq).T(71.25,0,0.25);A1.A(e134).P(ff,x1).P(fs,16).P(tp,58).T(68.75,58).P(c,x108,c).T(0,x108).P(lf,572).T(68.75,32,0.5,qoq).T(86,-515,0.5,ql).P(h,90).T(68.75,90);A1.A(e135).P(tp,46).P(h,200).P(o,1,_,_,"").P(lf,65,_,_,p).P(w,71).P(zy,0,t,_,"").T(58.95,1,0.3,qok).P(zx,0,t).T(58.95,1,0.3);A1.A(e136).P(tp,-253).T(85.003,67,0.497,qok);A1.A(e137).P(lf,0).P(w,50).P(tp,0).T(44,57,1,qoq).T(71.25,0,1).P(o,0,_,_,"").T(23.75,1,0.25,ql).P(h,198,_,_,p).T(44,141,1,qoq).T(71.25,198,1).P(bg,x102,c).T(44,x74,1).T(71.25,x29,1,_,x119);A1.A(e138).P(tp,8).T(105.5,127,1.5,qok).P(h,49).T(105.5,175,1.5).P(o,0,_,_,"").T(101,1,1).T(112,0,1).P(lf,402,_,_,p).T(105.5,19,1.5).P(w,147).T(105.5,525,1.5);A1.A(e139).P(ff,x2).P(tp,25).T(0,18).P(fs,80).T(0,32).P(c,x102,c).T(0,x74).P(h,127).T(0,42).P(o,1,_,_,"").T(0,1).P(lf,25,_,_,p).T(0,570).T(44.25,30,0.5,qoq).T(71.573,570,0.536).P(w,496).T(0,242);A1.A(e140).P(tp,159).P(ta,rt).P(c,x76,c).P(lf,-31).P(fs,9).P(o,1,_,_,"").T(44,0,0.5,qoq).T(71,1,0.5);A1.A(e141).P(tp,39).P(ta,po).P(fs,8).P(w,77).P(lf,348).T(20.5,328,0.179,ql).T(20.679,348,0.176);A1.A(e142).P(tp,80).T(0,105).P(zy,0.65714,t,_,"").T(0,0.66,_,_,0.66).P(zx,0.65714,t).T(0,0.66,_,_,0.66).T(7,0.66).P(o,1).T(6,0,1,ql).P(lf,565,_,_,p).T(2.25,380,0.5,qoq).T(7.5,-2530);A1.A(e143).P(w,242).P(h,42).P(ff,x2).P(lf,33).P(fs,32).P(tp,9).T(0,9).P(o,0,_,_,"").T(0,1,0.5,ql).T(6.5,0,1);A1.A(e144).P(h,20).P(lf,280).P(w,30).P(tp,-42).T(86,-20,0.497,qok).P(o,0,_,_,"").T(86,1,0.497);A1.A(e145).P(ta,po).P(w,100).P(ff,x2).P(fs,11).P(tp,-47).T(44.25,-47).P(o,0,_,_,"").T(59.75,1,0.5,qok).P(lf,172,_,_,p).T(59.75,172);A1.A(e146).P(ff,x1).P(fs,16).P(h,90).T(43.25,90).P(tp,58).T(43.25,58).P(lf,572).T(43.25,32,0.5,qoq).T(55,-515,0.5,ql).P(c,x108,c).T(0,x108);A1.A(e147).P(ta,po).P(h,20).P(ff,x2).P(tp,-39).T(86,-17,0.497,qok).P(w,150).T(86,150).P(c,x76,c).T(86,x76).P(o,0,_,_,"").T(86,1,0.497).P(lf,308,_,_,p).T(86,308).P(fs,12).T(86,12);A1.A(e148).P(tp,77).T(53.98,77).P(lf,527).T(59.75,327,0.267,qoq);A1.A(e149).P(tp,6).P(h,200).P(o,1,_,_,"").P(lf,167,_,_,p).P(w,71).P(zx,0,t,_,"").T(58.75,1,0.3,qok).P(zy,0,t).T(58.75,1,0.3);A1.A(e150).P(tp,10).P(h,48).P(w,42).P(lf,352).T(102,362,0.37,ql).T(102.37,352,0.318).T(102.687,362,0.389).P(o,0,_,_,"").T(102,1,0.37,qok).T(105.5,0,0.5,ql);A1.A(e151).P(tp,57).P(h,15).P(w,50).P(lf,-2304).T(0,-2304).T(44,312).P(o,0,_,_,"").T(44.75,1,0.5,qoq).T(71.25,0,0.25);A1.A(e152).P(tp,16).P(h,200).P(o,1,_,_,"").P(lf,98,_,_,p).P(w,71).P(zx,0,t,_,"").T(58.5,1,0.3,qok).P(zy,0,t).T(58.5,1,0.3);A1.A(e153).P(tp,50).P(ta,rt).P(c,x76,c).P(lf,-31).P(fs,9).P(o,1,_,_,"").T(44,0,0.5,qoq).T(71,1,0.5);A1.A(e154).P(tp,0).P(w,215).P(lf,350).T(20.5,330,0.179,ql).T(20.679,350,0.176);A1.A(e155).P(tp,0).P(ta,po).P(c,x76,c).P(lf,156).P(fs,9).P(o,0,_,_,"").T(11,1,0.5,qoq);A1.A(e156).P(tp,0).P(ta,po).P(c,x76,c).P(lf,78).P(fs,9).P(o,0,_,_,"").T(10,1,0.5,ql);A1.A(e157).P(tp,67).P(h,15).P(w,50).P(lf,-2304).T(0,-2304).T(44,234).P(o,0,_,_,"").T(44.75,1,0.5,qoq).T(71.25,0,0.25);A1.A(e158).P(zx,0.33333,t,_,"").P(lf,-33,_,_,p).P(zy,0.33333,t,_,"").P(tp,25,_,_,p).T(8.5,-28,1,qoq);A1.A(e159).P(ff,x1).P(fs,16).P(tp,58).T(8.438,58).P(c,x108,c).T(0,x108).P(lf,572).T(7.5,32,0.5,qoq).T(20,-515,0.5,ql).P(h,90).T(8.438,90);A1.A(e160).P(ta,po).P(w,100).P(o,1,_,_,"").P(ff,x2).P(fs,11,_,_,p).P(lf,-163).T(57.25,-13,0.5,qok).P(tp,-47).T(44.25,-47);A1.A(e161).P(tp,95).P(rz,-90,t,_,r).P(h,14,_,_,p).P(lf,-117).P(w,182).P(c,x74,c).T(44,x74).P(o,0,_,_,"").T(44,1,0.5,ql).T(71,0,0.5,qoq);A1.A(e162).P(rz,-34,t,_,r).P(tp,27,_,_,p).T(3.997,19,0.141,qok).T(4.138,27,0.112).P(h,0).T(0,64).T(3.997,76,0.141).T(4.138,64,0.112).P(o,0,_,_,"").T(0,0).T(4,1).P(lf,396,_,_,p).T(3.997,393,0.141).T(4.138,396,0.112).P(w,0).T(0,56).T(3.997,66,0.141).T(4.138,56,0.112);A1.A(e163).P(lf,560).T(11.5,271,0.5,qoq).P(o,1,_,_,"").T(0,1).T(24.75,0,0.5,ql);A1.A(e164).P(lf,78).P(w,50).P(bg,x102,c).T(44,x74,1,qoq).T(71.25,x29,1,_,x119).P(o,0,_,_,"").T(24,1,0.25,ql).P(h,177,_,_,p).T(44,126,1,qoq).T(71.25,177,1).P(tp,21).T(44,72,1).T(71.25,21,1);A1.A(e165).P(tp,209).P(ta,rt).P(lf,-31).P(fs,9).P(c,x166,c).T(44,x74,0.5,qoq).T(71,x76,0.5,_,x119);A1.A(e167).P(tp,0).P(h,200).P(o,1,_,_,"").P(lf,82,_,_,p).P(w,71).P(zx,0,t,_,"").T(56.5,1,0.25,qok).P(zy,0,t).T(56.5,1,0.25);A1.A(e168).P(lf,560).T(8.5,37,0.5,qoq).P(o,1,_,_,"").T(0,1).T(24,0,0.5,ql);A1.A(e169).P(lf,312).P(w,50).P(tp,22).T(44,73,1,qoq).T(71.25,22,1).P(o,0,_,_,"").T(24.75,1,0.25,ql).P(h,176,_,_,p).T(44,125,1,qoq).T(71.25,176,1).P(bg,x102,c).T(44,x74,1).T(71.25,x29,1,_,x119);A1.A(e170).P(tp,11).P(h,200).P(o,1,_,_,"").P(lf,0,_,_,p).P(w,71).P(zy,0,t,_,"").T(56.7,1,0.25,qok).P(zx,0,t).T(56.7,1,0.25);A1.A(e171).P(tp,56).P(h,15).P(w,50).P(lf,-2304).T(0,-2304).T(44,78).P(o,0,_,_,"").T(44.75,1,0.5,qoq).T(71.25,0,0.25);A1.A(e172).P(tp,105).P(ta,rt).P(c,x76,c).P(lf,-31).P(fs,9).P(o,1,_,_,"").T(44,0,0.5,qoq).T(71,1,0.5);A1.A(e173).P(tp,12).P(lf,-640).T(21.5,-341,0.75,ql);A1.A(e174).P(tp,102).P(w,300).P(h,14).P(rz,-90,t,_,r).P(c,x76,c).T(32.11,x76).P(o,0,_,_,"").T(23.75,1,0.5,ql).T(44,0,0.5).T(71,1,0.5,qoq).P(lf,-175,_,_,p).T(72.5,-179,0.5,qok).T(84.5,-175,0.5).P(fs,8).T(72.5,12,0.5).T(84.5,8,0.5);A1.A(e175).P(tp,0).P(ta,po).P(c,x76,c).P(lf,390).P(fs,9).P(o,0,_,_,"").T(14,1,0.5,qoq);A1.A(e176).P(zy,0.30556,t,_,"").P(zx,0.30556,t).P(lf,17,_,_,p).P(tp,-111).T(44.25,-111).P(o,0,_,_,"").T(59.75,1,0.5,qok);A1.A(e177).P(tp,66).P(h,15).P(w,50).P(lf,-2304).T(0,-2304).T(44,156).P(o,0,_,_,"").T(44.75,1,0.5,qoq).T(71.25,0,0.25);A1.A(e178).P(zx,0.33333,t,_,"").P(lf,-33,_,_,p).P(zy,0.33333,t,_,"").P(tp,25,_,_,p).T(11.5,10,1,qoq);A1.A(e179).P(lf,560).T(10.5,193,0.5,qoq).P(o,1,_,_,"").T(0,1).T(24.5,0,0.5,ql);A1.A(e180).P(lf,571).T(70,571).P(tp,140).T(70,140);A1.A(e181).P(zx,0.33333,t,_,"").P(zy,0.33333,t).P(lf,-33,_,_,p).P(tp,25).T(10.5,7,1,qoq);A1.A(e182).P(lf,390).P(w,50).P(bg,x102,c).T(44,x74,1,qoq).T(71.25,x29,1,_,x119).P(o,0,_,_,"").T(25,1,0.25,ql).P(tp,3,_,_,p).T(44,59,1,qoq).T(71.25,3,1).P(h,195).T(44,139,1).T(71.25,195,1);A1.A(e183).P(lf,560).T(9.5,115,0.5,qoq).P(o,1,_,_,"").T(0,1).T(24.25,0,0.5,ql);A1.A(e184).P(tp,0).P(ta,po).P(c,x76,c).P(lf,234).P(fs,9).P(o,0,_,_,"").T(12,1,0.5,qoq);A1.A(e185).P(zy,0.33333,t,_,"").P(lf,-33,_,_,p).P(zx,0.33333,t,_,"").P(tp,25,_,_,p).T(9.5,-5,1,qoq);A1.A(e186).P(lf,36).P(o,0,_,_,"").T(23.75,1,0.75,qoq).T(56.5,0,0.5,ql).T(68.5,1,0.5);A1.A(e187).P(tp,80).T(0,105).P(zy,0.65714,t,_,"").T(0,0.66,_,_,0.66).P(zx,0.65714,t).T(0,0.66,_,_,0.66).T(7,0.66).P(o,1).T(6,0,1,ql).P(lf,565,_,_,p).T(1.75,123,0.5,qoq).T(7.5,-2530);A1.A(e188).P(tp,16).P(h,200).P(o,1,_,_,"").P(lf,193,_,_,p).P(w,71).P(zx,0,t,_,"").T(59.131,1,0.3,qok).P(zy,0,t).T(59.131,1,0.3);A1.A(e189).P(tp,41).P(h,15).P(w,50).P(lf,-2304).T(0,-2304).T(44,0).P(o,0,_,_,"").T(44.75,1,0.5,qoq).T(71.25,0,0.25);A1.A(e190).P(ta,rt).P(ff,x2).P(lf,-31).P(fs,9).P(tp,124).T(44,124).P(o,0,_,_,"").T(44,1,0.5,qoq).T(71,0,0.5).P(c,x74,c).T(44,x74);A1.A(e191).P(ta,rt).P(ff,x2).P(lf,-31).P(fs,9).P(tp,81).T(44,81).P(o,0,_,_,"").T(44,1,0.5,qoq).T(71,0,0.5).P(c,x74,c).T(44,x74);A1.A(e192).P(tp,64).P(h,291).P(w,300).P(lf,-1750).T(0,-1750).T(123.029,117).P(o,0,_,_,"").T(123.5,1,1,qok);A1.A(e193).P(tp,66).T(20,66).P(o,0,_,_,"").T(20,1,1,ql).P(lf,592,_,_,p).T(20,32,0.5,qok).T(27.75,-1000,0.5,ql);A1.A(e194).P(tp,80).T(0,105).P(zy,0.65714,t,_,"").T(0,0.66,_,_,0.66).P(zx,0.65714,t).T(0,0.66,_,_,0.66).T(7,0.66).P(o,1).T(6,0,1,ql).P(lf,565,_,_,p).T(1.5,-6,0.5,qoq).T(7.5,-2530);A1.A(e195).P(c,x102,c).P(ff,x2).P(tp,25).T(1.5,25).T(6.5,18,1,qik).P(fs,400).T(0.5,80,1,qok).T(6.5,32,1,qik).P(h,127).T(6.5,42,1).P(o,0,_,_,"").T(0.5,1,1,ql).P(lf,25,_,_,p).T(6.5,30,1,qik).T(44.432,-220,0.491,qoq).T(71.5,30,0.5).P(w,496).T(0,496).T(6.5,242,1,qik);A1.A(e196).P(zy,0.30556,t,_,"").P(zx,0.30556,t).P(lf,207,_,_,p).P(tp,-111).T(44.25,-111).P(o,0,_,_,"").T(59.75,1,0.5,qok);A1.A(e197).P(tp,36).P(h,200).P(o,1,_,_,"").P(lf,27,_,_,p).P(w,71).P(zx,0,t,_,"").T(59.05,1,0.3,qok).P(zy,0,t).T(59.05,1,0.3);var S2=symbols[x204];var tl1=S2.tl[dt].tt,st2=S2.s[a]={},A2=A(_,tl1,st2);A2.A(e205).P(h,144).P(w,216);A2.A(e206).P(lf,0).P(tp,0);var S3=symbols[x218];var tl2=S3.tl[dt].tt,st3=S3.s[a]={},A3=A(_,tl2,st3);A3.A(e219).P(h,225).P(tp,0);A3.A(e205).P(h,225).P(w,150);A3.A(e220).P(tp,8).P(ta,lf).P(h,209).P(lf,10).P(w,131);var S4=symbols[x225];var tl3=S4.tl[dt].tt,st4=S4.s[a]={},A4=A(_,tl3,st4);A4.A(e205).P(h,330).P(w,175);A4.A(e226).P(h,330).P(tp,0).P(w,176);var S5=symbols[x231];var tl4=S5.tl[dt].tt,st5=S5.s[a]={},A5=A(_,tl4,st5);A5.A(e232).P(tp,0).P(h,35).P(lf,0).P(w,500);A5.A(e205).P(h,35).P(w,500);var S6=symbols[x269];var tl5=S6.tl[dt].tt,st6=S6.s[a]={},A6=A(_,tl5,st6);A6.A(e270).P(tp,92).P(ta,po).P(fs,6).P(c,x271,c).P(h,12).P(lf,54).P(w,25);A6.A(e272).P(tp,3).P(fs,12).P(h,20).P(c,x273,c).P(ff,x2).P(lf,4).P(w,124);A6.A(e274).P(tp,1).P(bg,x80,c).P(lf,2).P(o,1,_,_,"").P(h,107,_,_,p).P("border-style",x237).P("border-width",1).P(w,133);A6.A(e275).P(tp,23).P(bg,x74,c).P(h,67).P("border-style",i).P(lf,91).P(w,30);A6.A(e276).P(tp,92).P(ta,po).P(w,25).P(c,x271,c).P(h,12).P(lf,14).P(fs,6);A6.A(e277).P(tp,69).P(bg,x74,c).P(h,21).P("border-style",i).P(lf,51).P(w,30);A6.A(e278).P(tp,92).P(ta,po).P(w,25).P(c,x271,c).P(h,12).P(lf,94).P(fs,6);A6.A(e279).P(tp,59).P(bg,x74,c).P(h,31).P("border-style",i).P(lf,11).P(w,30);A6.A(e205).P(h,112).P(w,140);var S7=symbols[x285];var tl6=S7.tl[dt].tt,st7=S7.s[a]={},A7=A(_,tl6,st7);A7.A(e270).P(tp,92).P(ta,po).P(w,25).P(c,x271,c).P(h,12).P(lf,54).P(fs,6);A7.A(e272).P(tp,3).P(w,124).P(c,x273,c).P(h,20).P(ff,x2).P(lf,4).P(fs,12);A7.A(e274).P(tp,1).P(bg,x80,c).P("border-width",1).P("border-style",x237).P(h,107).P(o,1,_,_,"").P(lf,2,_,_,p).P(w,133);A7.A(e275).P(tp,63).P(bg,x74,c).P(h,27).P("border-style",i).P(lf,91).P(w,30);A7.A(e276).P(tp,92).P(ta,po).P(fs,6).P(c,x271,c).P(h,12).P(lf,14).P(w,25);A7.A(e277).P(tp,25).P(bg,x74,c).P(h,65).P("border-style",i).P(lf,51).P(w,30);A7.A(e205).P(h,112).P(w,140);A7.A(e279).P(tp,80).P(bg,x74,c).P(h,10).P("border-style",i).P(lf,11).P(w,30);A7.A(e278).P(tp,92).P(ta,po).P(fs,6).P(c,x271,c).P(h,12).P(lf,94).P(w,25);var S8=symbols[x286];var tl7=S8.tl[dt].tt,st8=S8.s[a]={},A8=A(_,tl7,st8);A8.A(e299).P(tp,22).P(c,x68,c).P(lf,15).P(fs,11);A8.A(e300).P(tp,0).P(rz,180,t,_,r).P(h,57,_,_,p).P(lf,0).P(w,50);A8.A(e205).P(h,57).P(w,50);A8.A(e180).P(lf,0).T(0,-468,0.5,qok).T(2.5,-388,0.5).T(4,-312,0.5).T(5.5,-233,0.5).T(7,-155,0.5).T(8.5,-78,0.5).T(11.5,-678,0.5,qik).P(tp,0).T(0.5,0).T(2.5,22,0.5,qok).T(4,35,0.5).T(5.5,37,0.5).T(7,23,0.5).T(8.5,3,0.5);Edge.registerCompositionDefn(compId,symbols,fonts,resources,opts);$(window).ready(function(){Edge.launchComposition(compId);});})(jQuery,AdobeEdge,"EDGE-16617889");