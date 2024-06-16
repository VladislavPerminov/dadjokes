module.exports = function (sequelize, DataTypes) {
  var Jokes = sequelize.define("Jokes", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    }, 
    punchline:{
     type: DataTypes.STRING,
     allowNull: false,
    },

    genre: {
      type:DataTypes.STRING,
      allowNull: false,
    },
    rating: {
      type: DataTypes.INTEGER,
    }
    
},
{
    
  timestamps: false
}  
);

  return Jokes;
};
