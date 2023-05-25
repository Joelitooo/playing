import styles from './simple-box.module.less';

export interface SimpleBoxProps {width?: number, height?: number, simpleString?: string}

const SimpleBox = ({width = 10, height = 20, simpleString="Default Value of String"}: SimpleBoxProps) => {
  return (
    <div className={styles['container']}>
      <div className={"border-box border-2 border-pink-500"}>
        <h1>Welcome to SimpleBox! {simpleString}</h1>
      </div>
      <div className="mt-10">
      <h2>
      ahaha this is the other text and you cant seem to have tailwind working properly XD
      </h2>
      </div>
    </div>
  );
}

export default SimpleBox;
