﻿//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:4.0.30319.42000
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace IIS.Eshhe_primer
{
    using System;
    using System.Xml;
    using ICSSoft.STORMNET;
    
    
    // *** Start programmer edit section *** (Using statements)

    // *** End programmer edit section *** (Using statements)


    /// <summary>
    /// Burrow.
    /// </summary>
    // *** Start programmer edit section *** (Burrow CustomAttributes)

    // *** End programmer edit section *** (Burrow CustomAttributes)
    [AutoAltered()]
    [AccessType(ICSSoft.STORMNET.AccessType.none)]
    [View("BurrowE", new string[] {
            "Name as \'Name\'",
            "Forest as \'For\'",
            "Forest.Name as \'Nam\'",
            "Forest.Coordinates as \'Coord\'"})]
    public class Burrow : ICSSoft.STORMNET.DataObject
    {
        
        private string fName;
        
        private IIS.Eshhe_primer.Forest fForest;
        
        private IIS.Eshhe_primer.Animal fAnimal;
        
        // *** Start programmer edit section *** (Burrow CustomMembers)

        // *** End programmer edit section *** (Burrow CustomMembers)

        
        /// <summary>
        /// Name.
        /// </summary>
        // *** Start programmer edit section *** (Burrow.Name CustomAttributes)

        // *** End programmer edit section *** (Burrow.Name CustomAttributes)
        [StrLen(255)]
        public virtual string Name
        {
            get
            {
                // *** Start programmer edit section *** (Burrow.Name Get start)

                // *** End programmer edit section *** (Burrow.Name Get start)
                string result = this.fName;
                // *** Start programmer edit section *** (Burrow.Name Get end)

                // *** End programmer edit section *** (Burrow.Name Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Burrow.Name Set start)

                // *** End programmer edit section *** (Burrow.Name Set start)
                this.fName = value;
                // *** Start programmer edit section *** (Burrow.Name Set end)

                // *** End programmer edit section *** (Burrow.Name Set end)
            }
        }
        
        /// <summary>
        /// Burrow.
        /// </summary>
        [PropertyStorage(new string[] {
                "Forest"})]
        public virtual IIS.Eshhe_primer.Forest Forest
        {
            get
            {
                IIS.Eshhe_primer.Forest result = this.fForest;
                return result;
            }
            set
            {
                this.fForest = value;
            }
        }
        
        /// <summary>
        /// мастеровая ссылка на шапку IIS.Eshhe_primer.Animal.
        /// </summary>
        // *** Start programmer edit section *** (Burrow.Animal CustomAttributes)

        // *** End programmer edit section *** (Burrow.Animal CustomAttributes)
        [Agregator()]
        [NotNull()]
        [PropertyStorage(new string[] {
                "Animal"})]
        public virtual IIS.Eshhe_primer.Animal Animal
        {
            get
            {
                // *** Start programmer edit section *** (Burrow.Animal Get start)

                // *** End programmer edit section *** (Burrow.Animal Get start)
                IIS.Eshhe_primer.Animal result = this.fAnimal;
                // *** Start programmer edit section *** (Burrow.Animal Get end)

                // *** End programmer edit section *** (Burrow.Animal Get end)
                return result;
            }
            set
            {
                // *** Start programmer edit section *** (Burrow.Animal Set start)

                // *** End programmer edit section *** (Burrow.Animal Set start)
                this.fAnimal = value;
                // *** Start programmer edit section *** (Burrow.Animal Set end)

                // *** End programmer edit section *** (Burrow.Animal Set end)
            }
        }
        
        /// <summary>
        /// Class views container.
        /// </summary>
        public class Views
        {
            
            /// <summary>
            /// "BurrowE" view.
            /// </summary>
            public static ICSSoft.STORMNET.View BurrowE
            {
                get
                {
                    return ICSSoft.STORMNET.Information.GetView("BurrowE", typeof(IIS.Eshhe_primer.Burrow));
                }
            }
        }
    }
    
    /// <summary>
    /// Detail array of Burrow.
    /// </summary>
    // *** Start programmer edit section *** (DetailArrayDetailArrayOfBurrow CustomAttributes)

    // *** End programmer edit section *** (DetailArrayDetailArrayOfBurrow CustomAttributes)
    public class DetailArrayOfBurrow : ICSSoft.STORMNET.DetailArray
    {
        
        // *** Start programmer edit section *** (IIS.Eshhe_primer.DetailArrayOfBurrow members)

        // *** End programmer edit section *** (IIS.Eshhe_primer.DetailArrayOfBurrow members)

        
        /// <summary>
        /// Construct detail array.
        /// </summary>
        /// <summary>
        /// Returns object with type Burrow by index.
        /// </summary>
        /// <summary>
        /// Adds object with type Burrow.
        /// </summary>
        public DetailArrayOfBurrow(IIS.Eshhe_primer.Animal fAnimal) : 
                base(typeof(Burrow), ((ICSSoft.STORMNET.DataObject)(fAnimal)))
        {
        }
        
        public IIS.Eshhe_primer.Burrow this[int index]
        {
            get
            {
                return ((IIS.Eshhe_primer.Burrow)(this.ItemByIndex(index)));
            }
        }
        
        public virtual void Add(IIS.Eshhe_primer.Burrow dataobject)
        {
            this.AddObject(((ICSSoft.STORMNET.DataObject)(dataobject)));
        }
    }
}
