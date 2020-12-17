/*  */

const f = (x) => {
    return () => console.log(`Rayos ${x}!`);
}

f('Daniel')(); /* 'Rayos Daniel!' */


/* Example */
const auditProps = {
    createdAt: { default: new Date },
    updatedAt: { default: new Date },
    createdBy: { type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy: { type: Schema.Types.ObjectId, ref: 'User' },
}

const Model = defaultProps => {
    return (name, props) => {
        const schema = moongose.schema({
            ...defaultProps,
            ...props
        });

        return mongoose.model(name, schema);
    }
}

export const withAudit = Model(auditProps);