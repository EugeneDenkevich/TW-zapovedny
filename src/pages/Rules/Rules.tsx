import { RuleCard } from "../../components/cards/RuleCard";
import { HomeBlockTemplate } from "../../components/HomeBlockTemplate";
import { useGetRuleQuery } from "../../reduxTools/requests/apiRequests";

import { ToFormButton } from "./../../components/buttons/toFormButton/ToFormButton";

import styles from "./Rules.module.scss";

export const Rules = () => {
  const { data } = useGetRuleQuery();

  return (
    <>
      <HomeBlockTemplate title="Правила усадьбы">
        <div className={styles["rules-block"]}>
          {data &&
            data.map((el, index) => {
              return <RuleCard key={index} content={el.content} />;
            })}
        </div>
      </HomeBlockTemplate>
      <HomeBlockTemplate>
        <ToFormButton className={styles.form} />
      </HomeBlockTemplate>
    </>
  );
};
