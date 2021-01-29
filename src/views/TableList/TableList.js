import React from "react";
// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
// core components
import GridItem from "components/Grid/GridItem.js";
import GridContainer from "components/Grid/GridContainer.js";
import Table from "components/Table/Table.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

const useStyles = makeStyles(styles);

export default function TableList() {
  const classes = useStyles();
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={12}>
        <Card>
          <CardHeader color="primary">
            <h4 className={classes.cardTitleWhite}>경력 테이블</h4>
            <p className={classes.cardCategoryWhite}>
              프로젝트 경험
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["프로젝트 명", "회사명", "기술스택", "기간"]}
              tableData={[
                ["대한항공 온라인 개편", "대한항공", "Angular8 SPA, typeScript Front/End 개발, W3C 웹접근성", "2019/09 ~ 2020/12"],
                ["제주항공 FareFamily & New Class", "제주항공", "javascript, Front/End 개발", "2019/02 ~ 2019/09"],
                ["아시아나항공 상용 우대 프로젝트", "아시아나항공", "Spring, Maven, javascript, Java, 오라클 SQL", "2018/08 ~ 2019/02"],
                ["아시아나항공 온라인 개편", "아시아나항공", "Spring, Maven, javascript, Java, 오라클 SQL", "2017/06 ~ 2018/08"],
                ["아시아나항공 환불 비용절감 프로젝트", "아시아나항공", "Spring, Maven, javascript, Java, 오라클 SQL", "2017/02 ~ 2017/06"],
                ["아시아나항공 모바일 사용선 개선", "아시아나항공", "Spring, Maven, javascript, Java, 오라클 SQL", "2016/11 ~ 2017/02"],
                ["아시아나항공 선호좌석 유료서비스 구축", "아시아나항공", "Spring, Maven, javascript, Java, 오라클 SQL", "2016/02 ~ 2016/11"],
                ["아시아나항공 미국 WCAG 장차법 구축", "아시아나항공", "Spring, Maven, javascript, Java, 오라클 SQL, 웹접근성", "2015/06 ~ 2016/02"],
                ["제주항공 중국 결제", "제주항공", "javascript, Java 개발", "2015/03 ~ 2015/06"],
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
      <GridItem xs={12} sm={12} md={12}>
        <Card plain>
          <CardHeader plain color="primary">
            <h4 className={classes.cardTitleWhite}>
              경력 이력 테이블
            </h4>
            <p className={classes.cardCategoryWhite}>
              이력 직급 정보
            </p>
          </CardHeader>
          <CardBody>
            <Table
              tableHeaderColor="primary"
              tableHead={["ID", "회사명", "직위", "기간", "담당 업무"]}
              tableData={[
                ["1", "뷰웍스", "인턴", "2014/06~2014/08", "하드웨어/펌웨어 개발"],
                ["2", "에어소프트", "사원", "2015/03~2017/12", "항공사 웹페이지 개발"],
                ["3", "에어소프트", "대리", "2018/01~2020/12", "항공사 웹페이지 개발"],
                ["4", "트레드링스", "과장", "2021/01~현재", "자사 솔루션 개발 및 운영"]
              ]}
            />
          </CardBody>
        </Card>
      </GridItem>
    </GridContainer>
  );
}
