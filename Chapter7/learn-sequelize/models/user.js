module.exports = (sequelize, DataTypes) => {
return sequelize.define('user', {
  name: {
    type: DataTypes.STRING(20), // =VARCAHR
    allowNull: false, //=NOTNULL
    unique: true,
  },
  age: {
    type: DataTypes.INTEGER.UNSIGNED, //= 부호없는 INT
    allowNull: false,
  },
  married: {
    type: DataTypes.BOOLEAN, // =TINYINT
    allowNull: false,
  },
  comment: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  created_at: {
    type: DataTypes.DATE, //=DATETIME
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
}, {
  timestamps: false, // false로 주지 않으면 시퀄라이즈가 자동으로 createdAt과 updatedAt를 추가한다.
});
};
