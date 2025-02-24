import streamlit as st

#標題
st.title("BMI 計算機")

#輸入
height=st.number_input("請輸入您的身高(公分)",min_value=50.0,max_value=300.0,value=175.0,step=0.1)
weight=st.number_input("請輸入你的體重(公斤)",min_value=10.0,max_value=300.0,value=50.0,step=0.1)

#初始化bmi_number
bmi_number = None

#BMI計算公式
if weight > 0 and height > 0:
    if weight == 0:
        st.error("⚠️身高不能為0")
    else:
        bmi_number= weight/((height/100)**2)
        st.write(f"您的BMI為:{bmi_number:.1f}")
else:
    st.warning("請輸入身高體重")

#劃分階段
if bmi_number is not None:
    if bmi_number > 35:
        st.error("重度肥胖😱")
    elif 30<= bmi_number <35:
        st.warning("中度肥胖😨")
    elif 27<= bmi_number<30:
        st.warning("輕度肥胖😟")
    elif 24<= bmi_number<27:
        st.info("過重😅")
    else:
        st.success("正常範圍")

#顯示身高體重
st.write("身高為:",f"{height/100:.2f}","公尺")
st.write(f"體重為:{weight:.1f}公斤")

#影片選擇
st.header("運動影片")

exercise_options = ["有氧運動","瑜珈","重訓","跳繩","伸展運動"]
selected_exercise = st.selectbox("選擇運動類型",exercise_options)

if selected_exercise == "有氧運動":
    st.video("https://www.youtube.com/watch?v=LZAQQOH5n8g&ab_channel=%E5%91%A8%E5%85%AD%E9%87%8EZoey")
elif selected_exercise == "瑜珈":
    st.video("https://www.youtube.com/watch?v=T41mYCmtWls&ab_channel=YogawithKassandra")
elif selected_exercise == "重訓":
    st.video("https://www.youtube.com/watch?v=vlD56BZ7CUI&ab_channel=%E7%A6%8F%E7%88%BE%E6%80%9D%E5%BA%AD")
elif selected_exercise == "跳繩":
    st.video("https://www.youtube.com/watch?v=O4nB-U8A_hc&t=58s&ab_channel=%E5%81%A5%E4%BA%BA%E8%93%8B%E4%BC%8A")
else:
    st.video("https://www.youtube.com/watch?v=Z31EmalIswM&ab_channel=%E5%81%A5%E5%BA%B7%E5%A5%BD%E6%96%B9%E6%B3%95")